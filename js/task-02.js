const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Здесь мы сначала находим список ингредиентов по ID элемента ul#ingredients.
const ingredientsList = document.querySelector('#ingredients');
// Затем мы проходим по каждому элементу массива ingredients
//  используя метод map()
const ingredientsItems = ingredients.map(ingredient => {
  // для создания нового массива элементов li
  const item = document.createElement('li');
  //  каждый из которых содержит название ингредиента
  item.textContent = ingredient;
  //  добавляет класс item
  item.classList.add('item');
  return item;
});
// и сохраняется в переменной ingredientsItems.
// используем метод append() списка ul#ingredients
// чтобы добавить все элементы li за одну операцию, используя оператор распыления ....
ingredientsList.append(...ingredientsItems);
