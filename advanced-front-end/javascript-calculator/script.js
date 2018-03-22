// MODEL
var operations = {
  // It should have a way to addTwoNumbers
  add : function(a,b){
    return a+b;
  },
  subtract : function(a,b) {
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  }
}

// VIEWS + CONTROLLER IN JQUERY
$(document).ready(function(){

  //////////// MATH OPERATIONS //////////
  // Add
  $("button[value='+']").on("click", function(){
    console.log("added");
  });
  // Subtract
  $("button[value='-']").on("click", function(){
    console.log("subtracted");
  });
  // Multiply
  $("button[value='x']").on("click", function(){
    console.log("mult");
  });
  // Divide
  $("button[value='÷']").on("click", function(){
    console.log("divide");
  });

  //////////// CACLULATOR OPERATIONS //////////
  // equal
  $("button[value='=']").on("click", function(){
    console.log("equal");
  });
  // All Clear [AC]
  $("button[value='AC']").on("click", function(){
    console.log("AC");
  });
  // Clear Entry [CE]
  $("button[value='CE']").on("click", function(){
    console.log("CE");
  });


});
