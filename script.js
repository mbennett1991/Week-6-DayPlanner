var currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"));

var hours = $(".hour");
var toDos = [];
var textArea = $(".description");
var currentHour = moment().format("HH:mm:A");
var saveBtn = $(".saveBtn");

console.log(currentHour);
//function that links hours to descriptions and moment.js
function timeTrack(){
    //for each hour 
    //parseInt hours value? 
    var scheduleHour = parseInt(hours.value);

    if (scheduleHour === currentHour){
        //set this(keyword) to "style" ".present"
        hours.addClass("present");
    }//else if (hours.value == currentHour.isBefore()){
        //set this to "style" ".past"
       // hours.addClass("past");
    }//else (hours.value == currentHour.isAfter()){
        //set this to "style" ".future"
      //  hours.addClass("future");
;

timeTrack();
//
// insert for each 
function savedToWindow(){
    var retrieveTextArea = window.localStorage.getItem("textArea", textArea);
    if (retrieveTextArea == null){
        return;
    } else {
        textArea.text(retrieveTextArea);
    }
}

//onclick events that save textarea to local storage 
//insert for each

//you need to stringify and parse 
saveBtn.on("click", function(event){
    event.preventDefault();

    localStorage.setItem("textArea", textArea);
    savedToWindow()
});


var homeworkDue = moment("2021-01-17, 23:59:59");

console.log(homeworkDue.diff(currentDay, "seconds"));