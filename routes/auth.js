const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const usuarios = [];

// Registro de usuario
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const password = bcrypt.hash(req.body.password, salt);

    const newUser = {
        name: req.body.name,
        password: password
    }

    usuarios.push(newUser);
    res.json({ success: true, newUser, usuarios})


})