let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");

const today=new Date();

const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const allMonths=["January","February","March","April","May","June","July","Auguest","September","October","November","December"];

date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekDays[today.getDate()];
month.innerHTML=allMonths[today.getMonth()];
year.innerHTML=today.getFullYear();
