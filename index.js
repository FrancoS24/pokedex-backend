const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const pokemonRouter = require('./routes/pokemon');
const userRouter = require('./routes/user');
// const movesRouter = require('./routes/moves');
// const pokemon_movesRouter = require('./routes/pokemon_moves');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
  extended: true
 }));

 app.use("/pokemon", pokemonRouter);
 app.use("/user", userRouter);
//  app.use("/moves", movesRouter);
//  app.use("/pokemon_moves", pokemon_movesRouter); 

app.get('/', (req, resp) => {
    resp.send("Mi primer backend en heroku")
});

app.listen(process.env.PORT || 4002, () => {
    console.log("Funcionando")
})