  
// This is used to get the modal
var mexicoModal = document.getElementById("mexicoModal");
var moscowModal = document.getElementById("moscowModal");
var srilankaModal = document.getElementById("srilankaModal");

// this gets the button that opens the modal
var mexicoBtn = document.getElementById("mexicoBtn");
var moscowBtn = document.getElementById("moscowBtn");
var srilankaBtn = document.getElementById("srilankaBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];
var moscowSpan = document.getElementsByClassName("close-button-moscow")[0];
var srilankaSpan = document.getElementsByClassName("close-button-sri-lanka")[0];

// When the user clicks the button, open the modal 
mexicoBtn.onclick = function() {
    mexicoModal.style.display = "block";
};

moscowBtn.onclick = function() {
    moscowModal.style.display = "block";
};

srilankaBtn.onclick = function() {
    srilankaModal.style.display = "block";
};


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mexicoModal.style.display = "none";
};
moscowSpan.onclick = function() {
    moscowModal.style.display = "none";
};

srilankaSpan.onclick = function() {
    srilankaModal.style.display = "none";
};