const express = require('express'); // importing the express package
const http = require('http');
const bodyParser = require('body-parser');
const app = express(); 	// creating the express app object
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended:false}));


app.use('/node',(rew,res,next)=>{
	console.log('this is the third middleware');
	res.send('<html><h1>this is the heading from the third middlware</h1></html>');
});


app.use('/add-product',(req,res,next)=>{
	console.log('this is the first middleware');
	res.send('<html><form action="/products" method="POST"><input type="text" name="title"><input type="submit"></form></html>');
	
});

app.use('/products',(req,res)=>{
	console.log(req.body);
	res.redirect('/');

});

server.listen(5001);