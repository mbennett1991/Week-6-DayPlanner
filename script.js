var currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, DD MMMM, YYYY"));

var hours = $(".hour");
var toDos = [];
var textArea = $(".description");
var currentHour = moment().format("HH:mm:a")
var saveBtn = $(".saveBtn")

console.log(currentHour);
//function that links hours to descriptions and moment.js
function timeTrack(){

    if (hours.value === currentHour){
        //set this(keyword) to "style" ".present"
    }else if (hours.value == currentHour.isBefore())
        //set this to "style" ".past"
    }else (hours.value == currentHour.isAfter()){
        //set this to "style" ".future"
};

//onclick events that save textarea to local storage 

saveBtn.on("click", function{
    
})



var homeworkDue = moment("2021-01-17, 11:59:59");

console.log(homeworkDue.diff(currentDay, "seconds"));