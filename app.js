function clock() {
	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();
	var day = fullDate.getDate();
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
	if (day < 10){
		day = "0" + day;
	}
	if (month+1 < 10){
		month = "0" + month;
	}

	document.getElementById('hour1A').innerHTML = hours.toString()[0]; document.getElementById('hour1B').innerHTML = hours.toString()[1];
	document.getElementById('minute1A').innerHTML = mins.toString()[0] + ":"; document.getElementById('minute1B').innerHTML = mins.toString()[1];
	document.getElementById('second1A').innerHTML = secs.toString()[0]; document.getElementById('second1B').innerHTML = secs.toString()[1] + ":";
	
	document.getElementById('day1A').innerHTML = day.toString()[0] + "-"; document.getElementById('day1B').innerHTML = day.toString()[1];
	document.getElementById('month1A').innerHTML = (month+1).toString()[0]; document.getElementById('month1B').innerHTML = (month+1).toString()[1];
	document.getElementById('year1A').innerHTML = year.toString()[0]; document.getElementById('year1B').innerHTML = year.toString()[1] + "-";
}
setInterval(clock,50);
