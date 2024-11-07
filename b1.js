function showCurrentTime() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    alert("The current time is: " + timeString);
  }
  
  showCurrentTime();