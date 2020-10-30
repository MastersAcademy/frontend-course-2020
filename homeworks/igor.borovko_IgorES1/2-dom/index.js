function sendMsg(){
  var msgs = $('#msgs').html();
  var msg = $("input[name=user_text]").val();
  msg = msg.trim();
  if(msg == ""){
  alert('Empty');
  return;
  }
  msg = "<div>" + msg + "</div>";
  $('#msgs').html(msgs + '<br>' + msg);
  $("input[name=user_text]").val("");
  }