var currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"));
//maybe try changing value to something else?
var hours = $(".hour");
var toDos = [];
var textArea = $(".description");
var currentHour = moment().format("HH:mm:A");
var saveBtn = $(".saveBtn");
var values = $("value")

console.log(currentHour);
//function that links hours to descriptions and moment.js
function timeTrack(){
    //for each THIS
    //parseInt hours value? 
    hours.each(function(){
    var thisHour = $(this);
    var scheduleHour = parseInt(thisHour.attr(values));
    console.log(scheduleHour);

    if (scheduleHour === currentHour){
        thisHour.addClass("present");
    }else if (currentHour.isAfter(scheduleHour)){
        thisHour.addClass("past");
    }//else (scheduleHour == currentHour.isAfter()){
        //set this to "style" ".future"
      //  hours.addClass("future");
});
timetrack();
};


timeTrack();
//
// insert for each 
function savedToWindow(){
//you need to stringify and parse 
saveBtn.on("click", function(event){
    event.preventDefault();

    localStorage.setItem("textArea", textArea);
    savedToWindow()
})
};

function getFromLocalStorage(){
    textArea.each(function(){
        var thisTextArea = $(this);
        var retrieveTextArea = window.localStorage.getItem("textArea", thisTextArea);
    if (retrieveTextArea == null){
        return;
    } else {
        textArea.text(retrieveTextArea);
    }}
    )
}


var homeworkDue = moment("2021-01-17, 23:59:59");

console.log(homeworkDue.diff(currentDay, "seconds"));