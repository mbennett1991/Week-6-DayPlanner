var currentDay = moment();
var timeBlock = $(".time-block");
var hours = $(".hour");
var textArea = $(".description");
var currentHour = moment().format("H");
console.log(currentHour);
var saveBtn = $(".saveBtn");


function pastPresentFuture() {
    timeBlock.each(function () {
        var thisHour = $(this);
        var thisBlockHour = parseInt(thisHour.attr("data-hour"));
        console.log(thisBlockHour);

        if (thisBlockHour == currentHour) {
            thisHour.addClass("present");
        } else if (thisBlockHour < currentHour) {
            thisHour.addClass("past");
        } else if (thisBlockHour > currentHour) {
            thisHour.addClass("future")
        };
    });
};




saveBtn.on("click", function (event) {
    event.preventDefault();

        var hourToDo = $(this).parent().attr("data-hour");
        var textToDo = $(this).siblings(textArea.val());

        localStorage.setItem(hourToDo, textToDo);

    });

// function renderSchedule(){

// };

$(document).ready(function () {

    pastPresentFuture();


    $("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"))

});