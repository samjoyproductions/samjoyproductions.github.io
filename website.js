const galleryItems = document.querySelectorAll('.galleryItem');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

galleryItems.forEach(img =>
    img.addEventListener('click', handleImgClick)
);

function handleImgClick(event){
    const currentImg = event.currentTarget;
    const imgSrc = currentImg.querySelector('img').src;
    console.log(imgSrc);
    modalInner.innerHTML = `
    <img class="modal-inner-pic" src="${imgSrc}">`;
    console.log(modalInner.innerHTML);
    modalOuter.classList.add('open');
}
// next step - add text descriptions on place/camera/desc to right side of image as well
// need to add these attributes to each image whoops

function closeModal() {
    modalOuter.classList.remove('open');
  }
  
  modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
      closeModal();
    }
  });
  
  window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === 'Escape') {
      closeModal();
    }
  });