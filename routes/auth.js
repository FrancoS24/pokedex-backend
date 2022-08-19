const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { verifyToken, TOKEN_SECRET } = require('../middleware/validate-jwt');
const user = require('./user');
const ConfigDB = require('../knexfile')
const knex = require('knex')(ConfigDB.development)

const router = express.Router();

const users =[];

// Registro usuario
router.post('/register', async (req, res) => {
    
    //hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
        name: req.body.name,
        password: password
    }
    await knex('user')
    .insert(newUser)
    .then((user) => {
        res.json({success: true, user});

    })
    .catch((error) => {
        res.status(400).json({ error: 'Error', error})
    })

    
});

// Buscar usuario
router.post('/login', async (req, res) => {
    
    const user = users.find((usuario) => usuario.name === req.body.name );
    if (!user) {
        return res.status(400).json({error: "usuario no encontrado"});
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).json({error: "Contraseña no válida"})
    }


const token = jwt.sign({
    id: user.id,
    name: user.name
}, TOKEN_SECRET);



res.json({error: null, data: "Login exitoso", token});

});


router.get('/user', verifyToken, async (req, res) => {
    console.log(req.user);

    res.json({error: null, users});
});

module.exports = router;