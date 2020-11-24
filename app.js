function clock() {
    const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var day = fullDate.getDay();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
if (hours < 10){
    hours = "0" + hours;
}
if (mins < 10){
    mins = "0" + mins;
}
if (secs < 10){
    secs = "0" + secs;
}
document.getElementById('hour').innerHTML= hours + ":";
document.getElementById('minute').innerHTML= mins+":";
document.getElementById('second').innerHTML= secs;
    
document.getElementById('day1').innerHTML= day;
document.getElementById('month1').innerHTML= month;
document.getElementById('year1').innerHTML= year

}
setInterval(clock,50);
