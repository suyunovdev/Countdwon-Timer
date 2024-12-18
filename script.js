let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let days = document.getElementById("days");

setInterval(() => {
  let date = new Date();
  let dd = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  days.innerHTML = dd;
  hours.innerHTML = hh;
  mins.innerHTML = mm;
  secs.innerHTML = ss;
}, 1000);
