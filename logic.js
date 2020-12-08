$(document).ready(function(){
// variables 
var currentDay = $("currentDay")
var time9am = $("#9");
var time10am = $("#10");
var time11am = $("#11");
var time12pm = $("#12");
var time1pm = $("#13");
var time2pm = $("#14");
var time3pm = $("#15");
var time4pm = $("#16");
var time5pm = $("#17");
var btn9 = $("#btn9");
var btn10 = $("#btn10");
var btn11 = $("#btn11");
var btn12 = $("#btn12");
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var btn3 = $("#btn3");
var btn4 = $("#btn4");
var btn5 = $("#btn5");
var clearBtn9 = $("#clearbtn9");
var clearBtn10 = $("#clearbtn10");
var clearBtn11 = $("#clearbtn11");
var clearBtn12 = $("#clearbtn12");
var clearBtn1 = $("#clearbtn1");
var clearBtn2 = $("#clearbtn2");
var clearBtn3 = $("#clearbtn3");
var clearBtn4 = $("#clearbtn4");
var clearBtn5 = $("#clearbtn5");
var clearAllBtn = $("#clearAllBtn")

// setting currentDay event 
var today = moment().format("dddd, MMMM Do, YYYY, h:mm a");
$("#currentDay").append(today);
console.log(today);

var now = parseInt(moment().format("H"));

// setting storage events 
btn9.on("click", function() {
localStorage.setItem("entry9", time9am.val());
});
btn10.on("click", function() {
localStorage.setItem("entry10", time10am.val());
});
btn11.on("click", function() {
localStorage.setItem("entry11", time11am.val());
});
btn12.on("click", function() {
localStorage.setItem("entry12", time12pm.val());
});
btn1.on("click", function() {
localStorage.setItem("entry1", time1pm.val());
});
btn2.on("click", function() {
localStorage.setItem("entry2", time2pm.val());
});
btn3.on("click", function() {
localStorage.setItem("entry3", time3pm.val());
});
btn4.on("click", function() {
localStorage.setItem("entry4", time4pm.val());
});
btn5.on("click", function() {
localStorage.setItem("entry5", time5pm.val());
});

// getting storage
time9am.val(localStorage.getItem("entry9"));
time10am.val(localStorage.getItem("entry10"));
time11am.val(localStorage.getItem("entry11"));
time12pm.val(localStorage.getItem("entry12"));
time1pm.val(localStorage.getItem("entry1"));
time2pm.val(localStorage.getItem("entry2"));
time3pm.val(localStorage.getItem("entry3"));
time4pm.val(localStorage.getItem("entry4"));
time5pm.val(localStorage.getItem("entry5"));

// clearing storage
clearAllBtn.on("click", function() {
    localStorage.clear();
    location.reload();
});
clearBtn9.on("click", function() {
    localStorage.removeItem("entry9");
    location.reload();
});
clearBtn10.on("click", function() {
    localStorage.removeItem("entry10");
    location.reload();
});
clearBtn11.on("click", function() {
    localStorage.removeItem("entry11");
    location.reload();
});
clearBtn12.on("click", function() {
    localStorage.removeItem("entry12");
    location.reload();
});
clearBtn1.on("click", function() {
    localStorage.removeItem("entry1");
    location.reload();
});
clearBtn2.on("click", function() {
    localStorage.removeItem("entry2");
    location.reload();
});
clearBtn3.on("click", function() {
    localStorage.removeItem("entry3");
    location.reload();
});
clearBtn4.on("click", function() {
    localStorage.removeItem("entry4");
    location.reload();
});
clearBtn5.on("click", function() {
    localStorage.removeItem("entry5");
    location.reload();
});
// setting hour colors
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updateschedule();

function updateschedule() {
  var Time = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > Time) {
      $("#" + timeOfday[i]).addClass("future");

    }
    else if (parseInt(timeOfday[i]) < Time) {
      $("#" + timeOfday[i]).addClass("past");

    }
    else if (parseInt(timeOfday[i]) == Time) {
      $("#" + timeOfday[i]).addClass("present");
    
    }
  }
}

});