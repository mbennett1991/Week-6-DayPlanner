var currentDay = moment();
var timeBlock = $(".time-block");
var hours = $(".hour");
var toDos = [];
var textArea = $(".description");
var currentHour = moment().format("HH:mm:A");
var saveBtn = $(".saveBtn");
var values = $("value")

$("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"));

function timeTrack(){
    timeBlock.each(function(){
    var thisHour = $(this);
    var scheduleHour = parseInt(thisHour.attr("data-hour"));

    // if (scheduleHour === currentHour){
    //     thisHour.addClass("present");
    // } else 
    if (currentHour < scheduleHour){
        thisHour.addClass("past");
    } else {
        thishour.addClass("future");
    };
})
};

// timetrack();
// };


// timeTrack();
// //
// // insert for each 
// function savedToWindow(){
// // link local storage to to-dos empty array    
// // save user input from textarea to todos
// // you need to stringify and parse
// // set/get local storage?
// saveBtn.on("click", function(event){
//     event.preventDefault();
// //Save to do to local storage
//     localStorage.setItem("textArea", textArea);
//     savedToWindow()
// })
// };

// function getFromLocalStorage(){
//     textArea.each(function(){
//         var thisTextArea = $(this);
//         var retrieveTextArea = window.localStorage.getItem("textArea", thisTextArea);
//     if (retrieveTextArea == null){
//         return;
//     } else {
//         textArea.text(retrieveTextArea);
//     }}
//     )
// }


// var homeworkDue = moment("2021-01-17, 23:59:59");

// console.log(homeworkDue.diff(currentDay, "seconds"));