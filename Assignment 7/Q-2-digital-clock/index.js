function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString('en-US', { hour12: false });
  
    document.getElementById('time').textContent = time;
  
    setTimeout(updateClock, 1000); // Update every second
  }
  
  updateClock();
  