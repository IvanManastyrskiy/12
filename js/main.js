let week = new Date().toLocaleString('ru', { weekday: 'long' });
let day = new Date().getDate()
let month = new Date().toLocaleString('ru', { month: 'long' });
let monthNum = new Date().getMonth()
let year = new Date().getFullYear();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let second = new Date().getSeconds();
let hourStr = " ";
let minutesStr = " ";
let secondStr = " ";

// месяца cклонения---------------------------------

if (monthNum == 8 || monthNum == 3) {

    month = month.substring(0, month.length - 1) + "а"
}
else {
    month = month.substring(0, month.length - 1) + "я"
}
// месяца склонения---------------------------------


// час мин сек + 0 -----------------------------------------------------------------------
if (minutes<10) {
    minutesStr = "0"
}
else {

};
if (minutes<10) {
    minutesStr = "0"
}
else {

};
if (second<10) {
    secondStr = "0"
}
else {

};
// час мин сек + 0-----------------------------------------------------------------------


// часы склонения-----------------------------------------------------------------------
if (hour == 1 || hour == 21) {
    hour = hour + " час"
}

else if (hour == 2 || hour == 3 || hour == 4 || hour == 22 || hour == 23) {
    hour = hour + " часа"
}
else {
    hour = hour + " часов"
};
// часы------------------------------------------------------------------------

// минуты склонения -----------------------------------------------------------
if (minutes % 10 == 1 && minutes != 11) {
    minutes = minutes + " минута"

}
else if (minutes > 4 && minutes < 21 || minutes % 10 == 5 || minutes % 10 == 6 || minutes % 10 == 7 || minutes % 10 == 8 || minutes % 10 == 9 || minutes % 10 == 0) {
    minutes = minutes + " минут"
}
else if (minutes % 10 == 4 || minutes % 10 == 3 || minutes % 10 == 2) {
    minutes = minutes + " минуты"
}
else { }
// минуты склонения ------------------------------------------------------------------


// секунды склонения -----------------------------------------------------------------
if (second % 10 == 1 && second != 11) {
    second = second + " секунда"

}
else if (second > 4 && second < 21 || second % 10 == 5 || second % 10 == 6 || second % 10 == 7 || second % 10 == 8 || second % 10 == 9 || second % 10 == 0) {
    second = second + (" секунд")
}
else if (second % 10 == 4 || second % 10 == 3 || second % 10 == 2) {
    second = second + (" секунды")
}
else { }
// секунды склонения-----------------------------------------------------------------





setTimeout("window.location.reload()",1000)

let datenow = ("Сегодня" + " " + week + " " + day + " " + month + " " + year + " года " + hourStr + hour + " " + minutesStr + minutes + " " + secondStr + second);
document.write(datenow);


// задание b---------------------------------------------------
date_b = new Date();

function formatDate(date_b) {
  
    let dd = date_b.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date_b.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date_b.getFullYear();

    let hr = date_b.getHours();
    if (hr < 10) hr = '0' + hr;
  
    let min = date_b.getMinutes();
    if (min < 10) min = '0' + min;
  
    let sec = date_b.getSeconds();
    if (sec < 10) sec = '0' + sec
    
  
    return dd + '.' + mm + '.' + yy + '.' + hr + '.' + min+ '.' + sec;
    
  }
 document.write("<br>" + formatDate(date_b))
 console.log(datenow)
 console.log(formatDate(date_b))
 