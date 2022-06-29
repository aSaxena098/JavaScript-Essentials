"use strict";
const addTodo = document.querySelector(".add");
const ul = document.querySelector(".todos");
const filterTodo = document.querySelector(".search input");

let genratetodoComponent = (str) => {
  let html = `
  <li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${str}</span>
  <i class="far fa-trash-alt delete"></i>
</li>
  `;
  ul.innerHTML += html;
  addTodo.add.value = "";
};

addTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  let str = addTodo.add.value.trim();
  if (str.length) {
    genratetodoComponent(str);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

let searchTodo = (text) => {
  Array.from(ul.children)
    .filter((element) => {
      return !element.textContent.includes(text);
    })
    .forEach((element) => {
      element.classList.add("hide");
    });

    Array.from(ul.children)
    .filter((element) => {
      return element.textContent.includes(text);
    })
    .forEach((element) => {
      element.classList.remove("hide");
    });

};

filterTodo.addEventListener("keyup", (event) => {
  let text = filterTodo.value;
  searchTodo(text);
});
