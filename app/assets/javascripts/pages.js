$(document).ready(function() {
  setTimeout(function() {
    studentShow();
  }, 1000);

  digitalClock();
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

    document.querySelectorAll(".home-clock")[0].innerHTML = "<span class='box-hr'>" + z(hours) + "</span>" + ":" + "<span class='box-hr'>" + z(minutes) + "</span>" + ":" + "<span class='box-hr'>" + z(seconds) + "</span>";

    function z(standIn) {
      if (standIn < 10) {
        standIn = "0" + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);
}
