
const express = require('express')
const app = express();

app.get('/', (req, resp) => {
    resp.send("Mi primer backend en heroku")
});

app.listen(process.env.PORT || 4002, () => {
    console.log("Funcionando pablitooo")
})