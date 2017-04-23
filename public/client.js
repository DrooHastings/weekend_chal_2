$(document).ready(onReady);

function onReady (){
  console.log('JS and JQ up and running!');
  clear();
//event listeners
$('#do-math').on('click', doMath);
$('#clear-calc').on('click', clear);
}//end onReady

function clear(){
  console.log('in clear');

  $('results-div').empty();




} //end clear



function doMath (){
  console.log('in doMath');
  var objectToSend ={
    x: $('#value1').val(),
    y: $('#value2').val(),
    type: $('#drop-down').val()
  };//end objectToSend

    $.ajax({
      url: '/doMath',
      type: 'POST',
      data: objectToSend,
      success: function (response){
        console.log('Post route:', response);
        //update DOM ??
        getCalcs();

      }// end success
    }); //end ajax
}//end doMath

function getCalcs(){
  // make ajax call to server for inventory array
  $.ajax({
    url: '/calculations',
    type: 'GET',
    success: function( response ){
      console.log( 'Get route:', response );
      // empty resultsDiv
      $( '.results-div' ).empty();// this may not be necessary
      // append each to resultsDiv
      $('.results-div').append('<p id ="answer">' + response.result + '</p>' );



    } // end success
  }); // end ajax
} // end getCalcs
