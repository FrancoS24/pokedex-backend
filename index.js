const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors());



const pokemonRouter = require('./routes/pokemon');
const userRouter = require('./routes/user');
const pokemon_typeRouter = require('./routes/pokemon_type')
const pokemon_movesRouter = require('./routes/pokemon_moves');

const authRouter = require('./routes/auth');

// const movesRouter = require('./routes/moves');
// const pokemon_movesRouter = require('./routes/pokemon_moves');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
  extended: true
 }));

 app.use("/pokemon", pokemonRouter);
 app.use("/users", userRouter);
 app.use("/pokemon_type", pokemon_typeRouter);
 app.use("/pokemon_moves", pokemon_movesRouter);
 app.use("/", authRouter)

 
//  app.use("/moves", movesRouter);
//  app.use("/pokemon_moves", pokemon_movesRouter); 


app.listen(process.env.PORT || 4002, () => {
    console.log("Funcionando")
})