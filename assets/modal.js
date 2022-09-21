// Get the modal


var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("image");

for (var i = 0 ; i < images.length ; i++) {
	var img = images[i];

	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}