document.addEventListener("DOMContentLoaded", function () {
  const hireButton = document.querySelector(".button1");
  const talkButton = document.querySelector(".button2");

  hireButton.addEventListener("click", function () {
    alert("Thank you for your interest! I'll get in touch with you soon.");
  });

  talkButton.addEventListener("click", function () {
    window.location.href = "Contact.html"; 
  });
});

function hireMe() {
  alert("Thank you for hiring me! I'll be in touch soon.");
}

function redirectToContact() {
  window.location.href = "#contact";
}

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(imageSrc, imageAlt) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageAlt;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        openModal(image.src, image.alt);
    });
});

function handleFormSubmit(event) {
    event.preventDefault(); 
    alert("Message Sent!");
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

