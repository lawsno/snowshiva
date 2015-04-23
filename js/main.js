log = function (message) {
  if (!window.console) {
    window.console = {};
  } else {
    console.log(message);
  }
}

$(document).ready(function() {
  $('#Container').mixItUp({
    animation: {
      duration: 400,
      effects: 'fade stagger(34ms) translateZ(100px) translateX(0%)',
      easing: 'ease'
    }
  });

  $.featherlight.defaults.afterOpen = function () {
    $('body').addClass("no-scroll");

  $.featherlight.defaults.afterClose = function () {
    $('body').removeClass("no-scroll");
  }
  }
});

