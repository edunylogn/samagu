document.addEventListener('DOMContentLoaded', function() {
  const galleryTitle = document.querySelector('.gallery-title');
  const galleryContent = document.querySelector('.gallery-content');

  galleryTitle.addEventListener('click', function() {
    galleryContent.classList.toggle('show');
  });
});
