// Fill in the object constructor with the following methods below:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method.
// 
// The methods that take an argument must accept only one argument and it has to be a string.
// 
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName = function(){
      return fullName.replace(/ .*/,''); // select space all letters after
    };
    this.getLastName = function(){
      return fullName.replace(/^[\w]+ /,'');  //select first word chars and space
    };
    this.setFirstName = function(first){
      fullName = fullName.replace(/^[\w]+/,first);
      return fullName;
    };
    this.setLastName = function(last){
      fullName = fullName.replace(/ .*/," " +last); 
      return fullName;
    };
    this.setFullName = function(firstAndLast){
      fullName = firstAndLast;
      return fullName;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();

Object.keys(bob).length // should return 6.
bob instanceof Person // should return true.
bob.firstName // should return undefined.
bob.lastName // should return undefined.
bob.getFirstName() // should return "Bob".
bob.getLastName() // should return "Ross".
bob.getFullName() // should return "Bob Ross".
bob.getFullName() // should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() // should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() // should return "Curry" after bob.setFullName("Haskell Curry").
