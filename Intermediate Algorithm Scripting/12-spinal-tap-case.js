function spinalCase(str) {
  
  //Replace aB to a-b
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s|\_/g,'-').toLowerCase();;
}

spinalCase('This Is Spinal Tap');
