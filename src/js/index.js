import "../scss/main.scss";

/* place your code below */

console.log("HELLO 🚀");

const entryTextarea = document.querySelector(".newIdea--js");

const saveButton = document.querySelector(".save--js");

saveButton.addEventListener("click", () => {
  localStorage.setItem("newIdea", entryTextarea.value);
});

const loadButton = document.querySelector(".load--js");

loadButton.addEventListener("click", () => {
  entryTextarea.value = localStorage.getItem("newIdea");
});