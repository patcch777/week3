///x=10,y,what is x=y
//variable-
var name="patrick";
console.log(name);
var message="Hello "+name;
console.log(message);

//2) variable number operation
var a= 10;
var b= 3;
var sum= a+b;
console.log(sum);
var minus =a-b;
console.log(minus);
var product =a*b;
console.log(product);
var division=a/b;
console.log(division);
var modulo=a % b;
console.log(modulo);

//3) boolean
var hungry=true
var tired=false;
// OR and AND
console.log()
console.log(hungry &&tired);
console.log(hungry||tired);
console.log(!hungry)//The reverse of the condition
 
// condition(if else)

var age = 15;

if (age<18){
    console.log("you canot watch the movie");
}
else{
  console.log("you may watch the movie");
}

if (age<13){
  console.log("you cannot watch the movie");
}
else if (age<18){
  console.log("you may watch the movie with parents");
}
else{
  console.log("you may watch the movie");
}

var number=40;
 if (number %2==0){
   console.log(number+ " is an even number");
 }


var passengerAge  =70;
var oriprice=100;

if  (passengerAge<18){
  var finalprice=0.5* oriprice;
  console.log("the ticket price will be RM "+finalprice);
   }           
  else if  (passengerAge<40){
    var finalprice=0.25*oriprice;
   console.log( "the ticket price will be RM "+finalprice);
 }
  else if (passengerAge<65){
     var finalprice=0.75*oriprice;
    console.log("the ticket price will be RM "+finalprice);
  }
  else{
    var finalprice=0.5*oriprice;
    console.log("the ticket price is RM "+finalprice);
  }
  
  
  // for loop=repeat 10 times..
  // from..0 until 10; each iteration add by one
  for(var i=0; i<10 ;i++){
    //show the number
    console.log(i);
  }
  
  
  // from 10....until0 each iteration I will minus by one
  for(var i=10; i>0; i--){
    //show number
    console.log(i);
  }
  
  for (var i=1; i<10; i+=2){
    console.log(i);
  }
  
   //multiplication table generator 
  var multiplier =12;
  var lines=15;
 for(var i= 1; i<=lines ; i++){
   console.log(i+"x"+multiplier+" ="+ i*multiplier)
               }
