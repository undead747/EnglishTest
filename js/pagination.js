$('#show_paginator').bootpag({
    total: 3,
    maxVisible: 10
 }).on('page', function () {
    $("#dynamic_content").html("<div class='countdown'>Limmit Time Only!<span id='clock'></span></div>"); // or some ajax content loading...
     
    function DateTime() {
      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() + 5);
      return dateTime = date + ' ' + time;
  
  }
  
  $('#clock').countdown(DateTime())
      .on('update.countdown', function (event) {
          var format = '%H:%M:%S';
          if (event.offset.totalDays > 0) {
              format = '%-d day%!d ' + format;
          }
          if (event.offset.weeks > 0) {
              format = '%-w week%!w ' + format;
          }
          $(this).html(event.strftime(format));
      })
      .on('finish.countdown', function (event) {
          $(this).parent().html('This offer has expired!')
              .parent().addClass('disabled');
      });
   });

 