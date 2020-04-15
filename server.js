const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data-recipes');

const server = express();

server.set('view engine', 'njk');

server.use(express.static('public'));
server.use(express.static('assets'));

nunjucks.configure('view', {
	express    : server,
	autoescape : false,
	noCache    : true
});

server.get('/', function(req, res) {
	return res.render('index', { recipes });
});

server.get('/sobre', function(req, res) {
	return res.render('sobre');
});

server.get('/receitas', function(req, res) {
	return res.render('receitas', { recipes });
});

server.get('/recipe/:index', function(req, res) {
	const recipeIndex = req.params.index;

	return res.render('recipe', { recipe: recipes[recipeIndex] });
});

server.listen(5000, function() {
	console.log('Server is ON');
});
