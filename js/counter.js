function updateCounter() {
  var now = new Date().getTime();
  var targetDate = new Date("May 3, 2024 00:00:00").getTime();
  var remainingTime = targetDate - now;

  // Days 
  if( (Math.floor(remainingTime / (1000 * 60 * 60 * 24))) / 10 >= 1 ) {
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  }
  else {
      var days = '0' + Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  }
  // Hours

  if( (Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) / 10 >= 1 ) {
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  else {
      var hours = '0' + Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  // Mins

  if( (Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))) / 10 >= 1 ) {
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  }
  else {
      var minutes = '0' + Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  }

  // Seconds
  if( (Math.floor((remainingTime % (1000 * 60)) / 1000)) / 10 >= 1 ) {
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  }
  else {
      var seconds = '0' + Math.floor((remainingTime % (1000 * 60)) / 1000);
  }
 
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
updateCounter();
setInterval(updateCounter, 1000);