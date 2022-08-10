const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const pokemonRouter = require('./routes/pokemon');
const userRouter = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
  extended: true
 }));

 app.use("/pokemon", pokemonRouter);
 app.use("/user", userRouter)

app.get('/', (req, resp) => {
    resp.send("Mi primer backend en heroku")
});

app.listen(process.env.PORT || 4002, () => {
    console.log("Funcionando")
})