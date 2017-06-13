const express = require( 'express' );
const app = express(); 

//
app.get('/', function(req, res){
    res.send('Hello World take 2');
});

app.listen(3000, ()=> console.log('server listening on 3000'));