
$(".home").height(pageContentHeight());

var frontPageImageWidth = $(".home").width();

var frontPageImageHeight = function() {
    return $(".home").height();
};

// Make circle width relative to parent width
$(".container").width(frontPageImageWidth / 1.2);

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
var $padding = function() {
  return (frontPageImageHeight() - circleHeight()) / 2 ;
}

// Set padding top
$(".home").css("padding-top", $padding() );

// Make sign heightand width equal container
$(".sign").height(circleHeight());
$(".sign").width(circleWidth());

// Vertical align sign
var $signPadding = function () {
  return circleHeight() - $(".sign").height();
};

$(".container").css("padding-top", $signPadding() );
