document.addEventListener('DOMContentLoaded', function() {
    const galleryTitle = document.querySelector('.gallery-title');
    const galleryContent = document.querySelector('.gallery-content');
  
    galleryTitle.addEventListener('click', function() {
      if (galleryContent.style.display === 'none') {
        galleryContent.style.display = 'block';
      } else {
        galleryContent.style.display = 'none';
      }
    });
  });