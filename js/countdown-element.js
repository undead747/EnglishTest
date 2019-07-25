function DateTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() + 5);
    return dateTime = date + ' ' + time;

}



var fiveSeconds = new Date().getTime();
$('#clock').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function(event) {
  var $this = $(this);
  if (event.elapsed) {
    $this.html(event.strftime('<div class="setTextAlign"><div class="counting-part1">Counting Time: <span>%H:%M:%S</span></div></div>'));
  } 
});