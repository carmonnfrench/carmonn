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

var homeHeight = function() {
    return $(".home").height();
};


// Define circle width equal to container width
var circleWidth = function() {
    return $(".container").width();
};

// Make height equal width
$(".container").height(circleWidth());

// Define circle height
var circleHeight = function() {
    return $(".container").height();
};

// Calculate top padding

var margin = function() {
  var doubleMargin = function() {
    return (homeHeight() - circleHeight());
  }
  return doubleMargin() * 0.5;
};

// Set padding top
$(".container").css("margin-top", margin() / 2);

// Make sign heightand width equal container
$(".sign").height(circleHeight());
$(".sign").width(circleWidth());

var adjustedHomeHeight = function() {
  return homeHeight() - margin();
}
$('.home').height(adjustedHomeHeight());












// Change circle color on mouse movement

$( ".container" ).mousemove(function( event ) {
  var pageCoords = "( " + ((event.pageX / 3) - 190) + ", " + (event.pageY / 6) + ", " + ((event.pageX + event.pageY) / 6) + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
$(".container").css("background-color", "rgb" + pageCoords );
});

$(".home").css("max-height", pageContentHeight());
