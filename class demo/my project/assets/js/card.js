$(document).ready(function () {
  $(".connect-button").on("click", function () {
    $(".inner-div").addClass("backface");
    $(".outer-div").addClass("outer-div-clicked");
    $(".social-icon").addClass("social-icon-backface");
    $(".exit-icon").addClass("exit-backface");
  });

  $(".exit-icon").on("click", function () {
    $(".inner-div").removeClass("backface");
    $(".social-icon").removeClass("social-icon-backface");
    $(".exit-icon").removeClass("exit-backface");
  });
});
