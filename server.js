// requires
var express = require ('express');
var path = require ('path');
var app = express ();
var bodyParser = require ('body-parser');

//globals
var port = 3000;
var x ;
var y;
var type;
var answer =0;

//uses
app.use( express.static('public'));
app.use( bodyParser.urlencoded({ extended: true }));

//
// spin up server
app.listen( port, function(){
  // console.log('server up on', port);
});// end app.listen

app.post ('/doMath', function (req, res){
  x = parseInt(req.body.x);
  y = parseInt(req.body.y);
  type = req.body.type;

  if (type === 'Add') {
    answer = (x+y);
    // console.log('I will be adding' + x + '' + y + answer);

  }
  else if (type === 'Subtract') {
    answer = (x-y);
    // console.log('I will be subtracting ' + x + '' + y + answer);

  }
  else if (type === 'Multiply') {
    answer = (x*y);
    // console.log('I will be multiplying ' + x + '' + y + answer);
  }

  else {
    answer = (x/y);
    // console.log('I will be dividing ' + x +  '' + y + answer);
  }



  res.sendStatus(200);
});

app.get( '/calculations', function( req, res ) {
  console.log( '/calculations hit' );
  // return al items array in an object
  var responseObject = {
    result: answer
  }; // end responseObject
  res.send( responseObject );
}); // end /claculations
