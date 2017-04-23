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
  $('#value1').empty();
  $('#value2').empty();
  $('.results-div').empty();
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
        console.log('back from server with', response);

      }// end success
    }); //end ajax

  
}//end doMath
