log = function (message) {
  if (!window.console) {
    window.console = {};
  } else {
    console.log(message);
  }
}



$(document).ready(function() {
  if ($('body').hasClass('portfolio')) {
    $('#Container').mixItUp({
      animation: {
        duration: 400,
        effects: 'fade stagger(34ms) translateZ(100px) translateX(0%)',
        easing: 'ease'
      }
    });
  } else if ($('body').hasClass('resume')) {
    // resume stuff here
  }
});
