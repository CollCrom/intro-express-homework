const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
	res.send(`Welcome to the Poke'Center`)
})

app.get('/pokemon', (req, res) => {
	res.render('index', {pokemon});
})


app.listen(3000, () =>{
	console.log('server is up');
});