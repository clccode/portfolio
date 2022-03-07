var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById('footer').innerHTML = "Date & Time: " + dateTime;