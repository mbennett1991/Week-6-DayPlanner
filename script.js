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
        var textToDo = $(this).siblings(".description").val();

        localStorage.setItem(hourToDo, textToDo);

    });

function renderSchedule(){
    timeBlock.each(function(){
        var hourToDo = $(this).attr("data-hour");
        var textToDos = localStorage.getItem(hourToDo);
        console.log(textToDos)

        if (textToDos !== null){
            $(this).children(textArea).val(textToDos);
        }else{
            return;
        }
    });
}

$(document).ready(function () {

    pastPresentFuture();
    renderSchedule();


    $("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"))

});