// Show more functionality

$("#showMore").on("click", function () {
  $("#showWrapper").slideDown(800);
  $("#showWrapperList").slideDown(800);
  $(this).hide();
  $("#showLess").show();
});

$("#showLess").on("click", function () {
  $("#showWrapper").slideUp(800);
  $("#showWrapperList").slideUp(800);
  $(this).hide();
  $("#showMore").show();
});

// Promo code icon validation

$("#promoCode").on("change", function (e) {
  if (e.target.value) {
    $(".checkWrapper").css("background-color", "#d9ecff");
    $("#icon").attr("fill", "#0099ff");
  } else {
    $("#icon").attr("fill", "#a7b2c3");
    $(".checkWrapper").css("background-color", "#e4e5e9");
  }
});

// Inputs Validation

$(function () {
  $(".validateInput").change(validateOnChange);
});

function validateOnChange() {
  let values = $(".validateInput")
    .map(function (index, elem) {
      return $(elem).val();
    })
    .get();

  let invalidInputs = values.includes("");
  if (invalidInputs == false) {
    $("#next").addClass("enabled_button").attr("disabled", false);
  } else {
    $("#next").removeClass("enabled_button").attr("disabled", true);
  }
}
