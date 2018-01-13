var channels = ["freecodecamp","test_channel","ESL_SC2"];

function getChannelInfo() {
  // Itereate each Channel
  channels.forEach(function(channel){
    // make URL
    function makeURL (type, name) {
      return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name + '?callback=?';
    }

    // first chain
    $.getJSON(makeURL("users", channel), function(data1) {
      var logo;
      if(data1.logo==undefined) {
        logo = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/867725/Image_not_available.png";
      }
      logo = data1.logo;

      // second chain, grab stream data
      $.getJSON(makeURL("streams", channel), function(data2) {
        var statusDisplay;
        var statusClass;
        if (data2.stream === undefined) {
          statusDisplay = "not an account";
          statusClass = "offline";
        }
        else if (data2.stream === null) {
          statusDisplay = "currently offline";
          statusClass = "offline";
        }
        else {
          statusDisplay = "currently online";
          statusClass = "online";
        }

        // Append Data from global var. Add classes to toggle
        $("#logo").append('<img class="' + statusClass + '" src="' + logo + '"/>');
        $("#status").append('<p class="' + statusClass + '">Channel ' + channel + ' is ' + statusDisplay + '</p>')
      });
    });
  });
}



$(document).ready(function(){
  getChannelInfo();
  $("#btn-all").click(function(){
    // (".online").addClass(".hide");
  });
  $("#btn-online").click(function(){
    // $("active")
  });
  $("#btn-offline").click(function(){
    // toggle offline
  });
});
