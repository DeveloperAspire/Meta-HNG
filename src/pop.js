// Modal Brouhaha

window.onload = function() {
  
    // Get the modal
    var modal = document.getElementById("modal-wrapper");
  
    // Get the button that opens the modal
    var btn = document.getElementById("connect-wallet");
  
    // Get the <span> element that closes the modal
    var span = document.getElementById("modal-close");
  
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
      document.body.style.backgroundColor = '#C6C6C6';
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      document.body.style.backgroundColor = 'white';
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.backgroundColor = 'white';
      }
  }

}