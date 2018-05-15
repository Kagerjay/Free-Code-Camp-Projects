// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
  //Replace aB to a-b
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s|\_/g,'-').toLowerCase();;
}

spinalCase('This Is Spinal Tap');

spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") // should return "all-the-small-things".
