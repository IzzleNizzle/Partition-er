/* TODO: Set Media Queries for Mobile Responsiveness */

/* Ok I think the best way to do the partiion box would be to do relative positioning to the parent div. */

$("#btn1").on("click", function() {
  $("#box2").css("width", "250px");
});

// giving a different color to each box
var color = ["blue", "purple", "red", "orange", "yellow"];
//variable to store latest value of the left property for boxes
var leftValue = 0;

$("#formSubmit").on("click", function() {
  //prevent anoying refresh
  event.preventDefault();
  //gather inputs from form
  var name = $("#name1")
    .val()
    .trim();
  var value = parseFloat(
    $("#value1")
      .val()
      .trim()
  );
  // Create new box for graph1 - giving properties depending on value

  // if valid input then create box for it
  if (name === "" && isNaN(value)) {
    $("#prompt").text("Invalid input");
  } else {
    var box = $("<div>");
    // giving box properties of other boxes
    box.attr("id", "box1");
    // inserting text into box
    box.html("<p>Name: " + name + "</p><p>Value: " + value + "</p>");
    // sizing box
    box.css("width", value + "px");
    // setting left value
    box.css("left", leftValue);
    // setting background color
    box.css(
      "background-color",
      color[Math.floor(Math.random() * color.length)]
    );
    // adding value to left value
    leftValue += value;
    // console.log(value, leftValue);
    $("#graph1").append(box);
  }//end if-else statement
});
