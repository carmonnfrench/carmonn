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


// Define circle width
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
var $doublePadding = function() {
  return (homeHeight() - circleHeight());
}

var $padding = function() {
  return $doublePadding() * 0.5;
};

// Set padding top
$(".container").css("margin-top", $padding() );

// Make sign heightand width equal container
$(".sign").height(circleHeight());
$(".sign").width(circleWidth());


// // Remove padding px from home height px
// var homeHeightMinusPadding = function() {
//   return homeHeight() - $padding();
// }
//
// $('.home').height(homeHeightMinusPadding());
