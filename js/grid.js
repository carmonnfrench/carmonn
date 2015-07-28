$(window).load( function() {

  // Order paintings with the jMosaic framework
  $(".canvas").jMosaic({margin: 3});
  $(".paper").jMosaic({margin: 3, is_first_big: true});

  // Define the overlay, and the html elements to be appended to the overlay
  var $overlay            = $("<div id='overlay'></div>");
  var $img                = $("<img>");

  var $imgParent          = $("<div class='art-all'></div>");
  var $imgText            = $("<div class='art-text'></div>");
  var $imgTitle           = $("<h3 class='art-title'></h3>");
  var $imgSize            = $("<p class='art-size'></p>");
  var $imgType            = $("<p class='art-type'></p>");
  var $imgDesc            = $("<p class='art-description'></p>");

  // Append the image, title, and description html elements to the overlay
  $overlay.append($imgParent);

  // Append text to the parent text object
  $imgText.append($imgTitle);
  $imgText.append($imgSize);
  $imgText.append($imgType);
  $imgText.append($imgDesc);

  // Append the image and text to a parent div
  $imgParent.append($img);
  $imgParent.append($imgText);

  // Append the overlay to the body
  $("body").append($overlay);

  // Click function to trigger the overlay and it's children
  $(".canvas img").click( function() {
    $($overlay).show();

    // Select the image that was clicked, append it to the img html element in the overlay
    var imgLocation = $(this).attr("src");
    $img.attr("src", imgLocation);

    // Select title and description attributes
    var imgTitle = $(this).attr("alt");
    var imgSize = $(this).attr("size");
    var imgType = $(this).attr("type");
    var imgText = $(this).attr("description");

      // Place title and text within the appended html elements
      $imgTitle.text(imgTitle);
      $imgSize.text(imgSize);
      $imgType.text(imgType);
      $imgDesc.text(imgText);

  });

  $(".paper img").click( function() {
    $($overlay).show();

    // Select the image that was clicked, append it to the img html element in the overlay
    var imgLocation = $(this).attr("src");
    $img.attr("src", imgLocation);

    // Select title and description attributes
    var imgTitle = $(this).attr("alt");
    var imgSize = $(this).attr("size");
    var imgType = $(this).attr("type");
    var imgText = $(this).attr("description");

      // Place title and text within the appended html elements
      $imgTitle.text(imgTitle);
      $imgSize.text(imgSize);
      $imgType.text(imgType);
      $imgDesc.text(imgText);

  });


  // Hide the overlay again when it is clicked on
  $overlay.click(function() {
      $overlay.hide();
  });


  // Refresh page on orientation change

  window.onorientationchange = function() { window.location.reload(); };

});

$(document).ready(function() {
  // Hide grid images until page is fully loaded
  function showImg() {
    $(".canvas").children().css("opacity", "1");
    $(".paper").children().css("opacity", "1");
  }
  setTimeout(showImg, 700);
})
