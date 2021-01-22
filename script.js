var currentDay = moment();
var timeBlock = $(".time-block");
var textArea = $(".description");
var currentHour = moment().format("H");
var saveBtn = $(".saveBtn");

//Setting up time blocks to change colors depending on time
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

//saving items to local storage
saveBtn.on("click", function (event) {
    event.preventDefault();

        var hourToDo = $(this).parent().attr("data-hour");
        var textToDo = $(this).siblings(".description").val();

        localStorage.setItem(hourToDo, textToDo);
    });

//Grabbing items from local storage to be stored on webpage
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
//Calling functions when the document has loaded
$(document).ready(function () {
    pastPresentFuture();
    renderSchedule();
    $("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"))
});