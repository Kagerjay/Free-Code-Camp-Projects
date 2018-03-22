// Create
// MODEL
var operations = {
  //////////// MATH OPERATIONS //////////
  storage: [],
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
  },
  //////////// CACLULATOR OPERATIONS //////////
  equals: function(){

  },
  allClear: function(){
  },
  clearEntry: function(){
  },
  /////////// DISPLAY & RENDER //////////////////
  render: function(){

  }
}

// Display, Read, Update, Destroy
// VIEWS + CONTROLLER IN JQUERY
$(document).ready(function(){
  //////////// MATH OPERATIONS //////////
  // Add
  $("button[value='+']").on("click", function(){
    console.log("add");
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
  $("button[value='.']").on("click", function(){
    console.log("I'm a dot");
  })

  //////////// EVERY NUMBER BUTTON //////////
  $(".num").on("click", function(){
    console.log("Im a number");
  });


});
