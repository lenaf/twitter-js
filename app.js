const express = require( 'express' );
const app = express(); 
const bodyParser = require('body-parser');
const chalk = require('chalk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const blue = chalk.blue()
var green = chalk.green()
const red = chalk.red()


//logging middleware

app.use(function (req, res, next) {
  console.log(green(req.method), green(req.originalUrl))
  next()
})

//a simple route
app.get('/get-1', function(req, res){
    res.send('Hello World take 2');
});


app.post('/post', function(req, res){
    res.send('You made a post request!');
});

//start the server
app.listen(3000, ()=> 
    console.log('server listening on 3000')
);