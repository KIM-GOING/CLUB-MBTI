const changeValue = (target) => {
  const imgTags = document.getElementsByTagName("img");
  const numImgTags = imgTags.length;
  // console.log(imgTags[1]);

  const selectedValue = target.value;
  // console.log(selectedValue);
  let i;
  for (i = 0; i < numImgTags; i++) {
    if (imgTags[i].id === selectedValue) {
      imgTags[i].style.display = "block";
    } else {
      imgTags[i].style.display = "none";
    }
  }
};
