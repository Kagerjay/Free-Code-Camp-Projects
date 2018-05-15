// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.

function reverseString(str) {
  var array = [];
  array = str.split('');
  array = array.reverse();
  str = array.join('');
  return str;
}

reverseString("hello");

reverseString("hello") // should return a string.
reverseString("hello") // should become "olleh".
reverseString("Howdy") // should become "ydwoH".
reverseString("Greetings from Earth") // should return "htraE morf sgniteerG".
