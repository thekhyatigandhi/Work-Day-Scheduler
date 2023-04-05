$(document).ready(function () {
  //

  function displayTime() {
    var rightNow = dayjs().format("dddd - MMM DD, YYYY - hh:mm:ss a");
    $("#currentDay").text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);

  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings("textarea").val();
    // this refers to the elements the function is tied to

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    localStorage.setItem(key, value);
  });

  for (let i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }
  // // how to create the for loop?
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    console.log(currentHour);
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlock === currentHour) {
      //  present
      $(this).addClass("present");
    } else if (timeBlock > currentHour) {
      // future
      $(this).addClass("future");
    } else {
      // past
      $(this).addClass("past");
    }
  });
});
