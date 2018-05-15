function convertHTML(str) {
  // &colon;&rpar;
  var newstr = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g,'&quot;').replace(/'/g, '&apos;');

  return newstr;
}

convertHTML("Hamburgers < Pizza < Tacos");
