const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const blue = chalk.blue
var green = chalk.green
const red = chalk.red
const yellow = chalk.yellow


//logging middleware

app.use(function (req, res, next) {
  console.log(res.statusCode);
  console.log(green(req.method), yellow(req.originalUrl))
  next()
})

// middleware chain
app.use('/special/', function(req, res, next){
    console.log("You reached the special area");
})
//a simple route
app.get('/', function(req, res){
    res.send('Hello World! ' + res.statusCode);
    // res.statusCode;

});


app.post('/post', function(req, res){
    res.send('You made a post request!');
});

//start the server
app.listen(3000, ()=>
    console.log('server listening on 3000')
);
