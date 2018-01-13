var forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

$(document).ready(function(){
  //change background-color
  $(".quote-new").click(function(){
    $.getJSON(forismaticAPI, function(data){
      $('.quote-box__msg').html(data.quoteText);
      $('.quote-box__author').html(data.quoteAuthor);

      let currentColor = randomColor();
      $('body').css("background-color",currentColor);
      $('.quote-box__author, .quote-box__msg').css("color", currentColor);
    })
  });
});
