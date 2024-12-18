let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let days = document.getElementById("days");
let years = document.getElementById("years");
let months = document.getElementById("months");

setInterval(() => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let dd = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  days.innerHTML = dd;
  years.innerHTML = year;
  months.innerHTML = month;
  hours.innerHTML = hh;
  mins.innerHTML = mm;
  secs.innerHTML = ss;
}, 1000);
