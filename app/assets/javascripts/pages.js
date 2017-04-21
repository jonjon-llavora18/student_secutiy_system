$(document).ready(function() {
  setTimeout(function() {
    studentShow();
  }, 1000);

  digitalClock();
  marquee($(".school-announcement"), $(".schoolAnnouncement"));
});

function studentShow() {
  $(".homeHeader").css("margin-top", "10%");
}

function digitalClock() {
  function clock() {
    var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    document.querySelectorAll(".home-clock")[0].innerHTML = "<span class='box-hr'>" + z(hours) + "</span>" + ":" + "<span class='box-hr'>" + z(minutes) + "</span>" + ":" + "<span class='box-hr'>" + z(seconds) + "</span> " + ampm;

    function z(standIn) {
      if (standIn < 10) {
        standIn = "0" + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);
}

function marquee(a, b) {
  var width = b.width();
  var start_pos = a.width();
  var end_pos = -width;

  function scroll() {
    if (b.position().left <= -width) {
      b.css("left", start_pos);
      scroll();
    } else {
      time = (parseInt(b.position().left, 10) - end_pos) *
      (10000 / (start_pos - end_pos));
      b.animate({
      "left": -width
    }, time, "linear", function() {
      scroll();
      });
    }
  }

  b.css({
    "width": width,
    "left": start_pos
  });

  scroll(a, b);

  b.mouseenter(function() {
    b.stop();
    b.clearQueue();
  });

  b.mouseleave(function() {
    scroll(a, b);
  });
}
