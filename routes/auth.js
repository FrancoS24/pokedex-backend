const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt')
const user = requiere('./user')

const router = express.Router();

const usuarios = [];

// Registro de usuario
router.post('/register', async (req, res) => {
    const { body } = req
    console.log({body})
    try {
        const isUser = await user.findOne({name: body.name })
        if (isUser) { 
            return res.status(403).send('usuario ya existe')
        }
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(req.body.password, salt);
        const user = await user.create({ name: req.body.name, password: password, salt})
        jwt.sign()

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

    usuarios.push(user);
    res.json({ success: true, user, usuarios})
})