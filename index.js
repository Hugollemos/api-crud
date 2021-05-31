const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const routes = require('./routes/rotas');
const path = require('path');
const mongoose = require('mongoose')

//mongoose
mongoose.connect('mongodb+srv://hugo:123@cluster0.9jizf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Banco de dados conectado')
});


app.use(routes)
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//porta de esculta do serve
app.listen(port, function(){
  console.log("servidor Rodando na url http://localhost:8081");
});