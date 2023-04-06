$(document).ready(function () {
  // function to display day, date and time
  function displayTime() {
    var rightNow = dayjs().format("dddd - MMM DD, YYYY - hh:mm:ss a");
    $("#currentDay").text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);

  //applying an event listener on the save button
  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id"); // this refers to the elements the function is tied to
    var value = $(this).siblings("textarea").val();

    // storing items in the local storage
    localStorage.setItem(key, value);
  });
  // applying a loop so that the description for all the hours is saved in the local storage
  for (let i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }

  // using the each loop to apply color to each timeblock
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    console.log(currentHour);
    // using parseInt to parses a string argument and returns an integer, using split to seperate the hour and the number
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
