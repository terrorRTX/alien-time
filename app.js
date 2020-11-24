function clock() {
const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var day = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
var msecs = fullDate.getMilliseconds();
    
if (hours < 10){
    hours = "0" + hours;
}
if (mins < 10){
    mins = "0" + mins;
}
if (secs < 10){
    secs = "0" + secs;
}
if (day < 10){
    day = "0" + day;
}
if (month < 10){
    month = "0" + month;
}
if (msecs<100) {
    if (msecs<10) {
        msecs = "00";
    } else {
        msecs = "0" + msecs;
    }
}
document.getElementById('hour').innerHTML= hours + ":";
document.getElementById('minute').innerHTML= mins+":";
document.getElementById('second').innerHTML= secs+".";
document.getElementById('millisecond').innerHTML= msecs.toString()[0]+msecs.toString()[1]+"";
    
    
document.getElementById('day1').innerHTML= day+"-";
document.getElementById('month1').innerHTML= month+1+"-";
document.getElementById('year1').innerHTML= year+"";

}
setInterval(clock,50);
