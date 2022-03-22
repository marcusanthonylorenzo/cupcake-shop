$(document).ready(function () {


  $('#best').click(function () {
    $("body").removeAttr('background-color');
    $("body").addClass('dark');
  });

  //light option, not yet resettable
  // $('#best').click(function () {
  //   $("body").removeAttr('background-color');
  //   $("body").addClass('light');
  // });

});
