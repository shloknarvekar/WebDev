const form = document.querySelector('#meow');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName;
    list.append(newLi);
});