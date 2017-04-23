Welcome to your second weekend challenge!

We are going to be building a calculator application using jQuery, Node, and Express!!

where the client side will take in the values (in 2 input text fields)
[x] build 2 input fields for two values
[x]results div
[x] set event listeners for these in client.js

and the type of mathematical operation (selected using a button on the DOM).
[x] build 4 buttons on the DOM
[x]  event listeners for each button - doing a drop down instead.  
[]  this works as a drop down?

Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST.
So when the object is sent, it should look something like this: { x: 3, y: 4, type: Add }
[x] set up an objectToSend with properties (x, y, type)
[x] AJAX to send object to server via POST route

The logic for the calculator needs to be housed on the Server,

Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways.
[x] store convert value1 and value 2 into numbers using parseInt()
[x] switch?? or conditional statement that checks the 'type' property
[x] execute math based on type


The server should be able to handle Addition, Subtraction, Multiplication, and Division.

Once the calculation is complete, it should be sent back down to the client side app
[] send back as an object (look at Dev's example and guessing-game)

where it should be displayed on the DOM.
[](look at Dev's example and guessing-game)
[] appending to results div (answer var on server-side)

Finally, build a 'clear' button that resets the whole experience.
[]build a load calculator function like we did with the game?

[] if I have time- break calculator logic out into module
