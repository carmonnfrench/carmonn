var windowHeight = function() {
    return $(window).height();
};

var includesHeight = function() {
    return $("header").height() + $("footer").height();
}

var pageContentHeight = function() {
  // Return a height value equal to the window height minus header and footer
  return windowHeight() - includesHeight();
};

$(".home").height(pageContentHeight() - includesHeight() );

// Store adjusted home height in variable
var homeHeight = function() {
    return $(".home").height();
};


    // Circle width is defined in CSS
    // Circle height is set here relative to circle width
    //

$('.container').css("max-width", (pageContentHeight() - 20));

// Store circle width in variable
var circleWidth = function() {
    return $(".container").width();
};

// Make height equal width
$(".container").height(circleWidth());

// Define circle height
var circleHeight = function() {
    return $(".container").height();
};

// Make sign height and width equal circle
$(".sign").height(circleHeight());
$(".sign").width(circleWidth());

var adjustedHomeHeight = function() {
  return homeHeight() - margin();
}
$('.home').height(pageContentHeight());






// Change circle color on mouse movement

$( ".container" ).mousemove(function( event ) {
  var r = ((event.pageX / 3) - 190);
  var g = 10;
  var b = (event.pageY / 6);
  var pageCoords = "( " + r + ", " + 10 + ", " + b + " )";
    console.log(pageCoords);
  $(".container").css("background-color", "rgb" + pageCoords );
});

$(".home").css("max-height", pageContentHeight());
