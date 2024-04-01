var brtd = new Date("junary, 2021 12:00:00").getTime();
var now = new Date().getTime();
var me = Math.floor((now - brtd)/(1000*60*60*24))

document.querySelector(".DataTime").innerHTML ="Нам уже: " + me + "дней!!!";