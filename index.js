
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: fakse}))
app.use(bodyParser.json());
app.use(cors());

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');




app.get('/', (req, resp) => {
    resp.send("Mi primer backend en heroku")
});

app.listen(process.env.PORT || 4002, () => {
    console.log("Funcionando pablitooo")
})