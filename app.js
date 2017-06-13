const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const nunjucks = require('nunjucks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const blue = chalk.blue
var green = chalk.green
const red = chalk.red
const yellow = chalk.yellow

//render
const locals = {
    title: 'An Example',
    people: [
        {name: 'Lena'},
        {name: 'Vinaya'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

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
    // res.send('Hello World! ' + res.statusCode);
    res.render('index.html', locals);
    // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    // res.render( 'index', {title: 'Hall of Fame', people: people} );
});


app.post('/post', function(req, res){
    res.send('You made a post request!');
});

//start the server
app.listen(3000, ()=>
    console.log('server listening on 3000')
);
