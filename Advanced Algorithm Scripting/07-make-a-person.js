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
