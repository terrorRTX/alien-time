function clock() {
    const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var day = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
var yearCut = year.charAt(3) + year.charAt(4);
    
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
document.getElementById('hour').innerHTML= hours + ":";
document.getElementById('minute').innerHTML= mins+":";
document.getElementById('second').innerHTML= secs;
    
document.getElementById('day1').innerHTML= day;
document.getElementById('month1').innerHTML= month+1;
document.getElementById('year1').innerHTML= yearCut

    
document.getElementById('Ahour').innerHTML= hours + ":";
document.getElementById('Aminute').innerHTML= mins+":";
document.getElementById('Asecond').innerHTML= secs;
    
document.getElementById('Aday1').innerHTML= day;
document.getElementById('Amonth1').innerHTML= month+1;
document.getElementById('Ayear1').innerHTML= yearCut;
    
}
setInterval(clock,50);
