const btn = document.querySelector('#v2');
const button = document.querySelector('#v3');
btn.onclick = () => {
    console.log("You Clicked Me!");
    alert("You Clicked Me!");
}
function scream() {
    console.log("AHHHHHHHHHH!");
    console.log("Stop Touching ME!");
}
btn.onmouseenter = scream;