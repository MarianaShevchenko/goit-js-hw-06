// Здесь мы сначала находим список категорий по ID элемента ul#categories
const categoriesList = document.querySelector('#categories');

// Затем получаем дочерние элементы списка (элементы li.item)
//  с помощью свойства children.
const categories = categoriesList.children;

// Далее мы выводим в консоль общее количество категорий,
//  используя свойство length у списка дочерних элементов.
console.log(`Number of categories: ${categories.length}`);

// Затем мы проходим по каждой категории, используя метод forEach()
//  для массива из дочерних элементов.
Array.from(categories).forEach(category => {
  // Для каждой категории мы находим заголовок категории (h2)
  const categoryName = category.querySelector('h2').textContent;

  // и количество элементов в категории (всех вложенных в него li)
  // используя метод querySelectorAll()
  const categoryElementsCount = category.querySelectorAll('li').length;
  // . Затем мы выводим эту информацию в консоль с помощью console.log().
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});
