// JavaScript code
const mySelect = document.getElementById("coffee");
const imageContainer = document.getElementById("img-qr");

const selectedValue = mySelect.value;

mySelect.addEventListener("change", function () {
  const selectedValue = mySelect.value;
  console.log(selectedValue);
  const selectedImage = document.getElementById(selectedValue);
  console.log(selectedImage);

  const images = imageContainer.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    if (images[i].id === selectedValue) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
});
