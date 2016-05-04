var express = require('express')
var morgan  = require('morgan')
var bodyParser = require('body-parser')



var PORT = 3000

var app = express()

app.use( morgan( 'dev' ) )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended : true } ) )
app.use( express.static('public') )



app.use( '/' , function( req , res ){
  res.sendfile( 'index.html' )
})



app.listen( PORT , function () {
  console.log( "listening on "  + PORT );
})
