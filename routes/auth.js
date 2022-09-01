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
router.post('/signup', async (req, res) => {
    
    //hash contraseña
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: password
    }
    console.log(newUser)
    return await knex('user')
    .insert(newUser)
    .then(() => {
        return res.status(200).json({success: true, newUser});
        

    })
    .catch((error) => {
        return res.status(400).json({ error: error})
    })

    
});

// Buscar usuario
router.post('/login', async (req, res) => {
    //buscamos usuario con mismo mail
    console.log(req.body, 'req.body')
    try {
    const user = await knex
    .select('*')
    .from('user')
    .where('user.name', req.body.name)
    .then((user) => {
        return user;
    })
    console.log(user, 'user')
    if(!user) {
        return res.status(400).json({error: 'Usuario no encontrado', success:false});
    }
    const validPassword = bcrypt.compareSync(  req.body.password, user[0].password );
    console.log(validPassword)
    if(!validPassword) {
        return res.status(400).json({error: 'Contraseña no válida', success:false});
    }
    //Crear el token
    const token = jwt.sign({
        name: user[0].name,
        
        id: user[0].id
    }, TOKEN_SECRET);
    res.json({error: null, data: 'Login exitoso', token, success:true});
    } catch (error) {
        console.log("Error en login");
      }
});
// router.post('/', async (req, res) => {
    
//     try
//     const user = await knex
//     .select('*')
//     .from('user')
//     .where('user.name', req.body.name)
//     .then((user) => {
//         return user
//     }) 
//     console.log(user)
//     // ((user) => user.name === req.body.name );
//     if (!user) {
//         return res.status(400).json({error: "usuario no encontrado", access: false});
//     }
//     console.log(req.body.password)

//     const validPassword = bcrypt.compareSync(req.body.password, user[0].password);
//     if (!validPassword) {
//         return res.status(400).json({error: "Contraseña no válida", access: false})
//     }
    


//     const token = jwt.sign({
//     id: user[0].id,
//     name: user[0].name,
//     email: user[0].email
//     }, TOKEN_SECRET);

// //     router.get('/', verifyToken, async (req, res) => {
// //     console.log(req.user);
// //     res.json({error: null, users});
// // });




//     res.json({error: null, access: true, token});



// });



module.exports = router;