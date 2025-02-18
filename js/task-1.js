
// Отримуємо список категорій
const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо всі категорії та виводимо їх назви та кількість елементів
categoryItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
