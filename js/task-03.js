const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.log('Масив зображень:', images);

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ url, alt }) =>
  `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__img"></li>`;

console.log('Функція створення елементу галереї:', createGalleryItem);

const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ''
);
console.log('Створений HTML-код галереї:', galleryMarkup);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

console.log('Галерея зображень була створена та додана до сторінки.');
