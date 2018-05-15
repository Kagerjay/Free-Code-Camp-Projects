function telephoneCheck(str) {
  var rg=/^(1\s?)?([0-9]{3}|\([0-9]{3}\))[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/gm;
  return rg.test(str);
}

telephoneCheck("555-555-5555");
