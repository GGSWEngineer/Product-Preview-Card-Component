const responsiveImage = document.getElementById('responsive-image');

function updateImageSource() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 600) {
    responsiveImage.src = './images/image-product-mobile.jpg'; // Set the image source for smaller screens
  } else {
    responsiveImage.src = './images/image-product-desktop.jpg'; // Set the default image source for larger screens
  }
}

// Call the function initially and add an event listener to update the image source on window resize
updateImageSource();
window.addEventListener('resize', updateImageSource);