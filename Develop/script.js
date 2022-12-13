// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function currentDateEl() {
  $("#currentDay").datepicker.formatDate("yy/mm/dd", new Date());
}
function saveButton() {
  $("#saveItem0").on("click", () => {
    saveText(0);
  });
  $("#saveItem1").on("click", () => {
    saveText(1);
  });
  $("#saveItem2").on("click", () => {
    saveText(2);
  });
  $("#saveItem3").on("click", () => {
    saveText(3);
  });
  $("#saveItem4").on("click", () => {
    saveText(4);
  });
  $("#saveItem5").on("click", () => {
    saveText(5);
  });
  $("#saveItem6").on("click", () => {
    saveText(6);
  });
  $("#saveItem7").on("click", () => {
    saveText(7);
  });
  $("#saveItem8").on("click", () => {
    saveText(8);
  });
  $("#saveItem9").on("click", () => {
    saveText(9);
  });
  $("#saveItem10").on("click", () => {
    saveText(10);
  });
  $("#saveItem11").on("click", () => {
    saveText(11);
  });
  $("#saveItem12").on("click", () => {
    saveText(12);
  });
  $("#saveItem13").on("click", () => {
    saveText(13);
  });
  $("#saveItem14").on("click", () => {
    saveText(14);
  });
  $("#saveItem15").on("click", () => {
    saveText(16);
  });
  $("#saveItem17").on("click", () => {
    saveText(17);
  });
  $("#saveItem18").on("click", () => {
    saveText(18);
  });
  $("#saveItem19").on("click", () => {
    saveText(19);
  });
  $("#saveItem20").on("click", () => {
    saveText(20);
  });
  $("#saveItem21").on("click", () => {
    saveText(21);
  });
  $("#saveItem22").on("click", () => {
    saveText(22);
  });
  $("#saveItem23").on("click", () => {
    saveText(23);
  });
}

function saveText(id) {
  let currentEvents = JSON.parse(localStorage.getItem("events"));
  let inputText = $("#input${id}").val();
  currentEvents[id] = inputText;
  localStorage.setItem("events", JSON.stringify(currentEvents));
}

function localStorage() {
  let calendarEvents = JSON.parse(localStorage.getItem("events"));

  if (!calendarEvents) {
    localStorage.setItem("events", JSON.stringify([]));
    return;
  }

  for (var i = 0; i < 24; i++) {
    let textAreaEl = $("#input${i}");
    if (calendarEvents[i]) {
      textAreaEl.val(calendarEvents[i]);
    }
  }
}

function colorScheme() {
  let now = moment().format("H");
  for (var i = 0; i < 24; i++) {
    var hour = $("#input${i}");
    var current = hour.attr("data-hour");
    if (now > current) {
      hour.addClass("bg-secondary");
    } else if (now < current) {
      hour.addClass("bg-success");
    } else if (now == current) {
      hour.addClass("bg-danger");
    }
  }
}

function initialize() {
  currentDateEl();

  saveButton();

  localStorage();

  colorScheme();
}

initialize();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
