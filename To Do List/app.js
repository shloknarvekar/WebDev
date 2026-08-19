let userInput = prompt("Enter Command!");
let arr = [];
while (userInput !== "quit") {
    if (userInput === "new") {
        let newTodo = prompt("Enter new Todo!");
        arr.push(newTodo);
        console.log(`"${newTodo}" added to the list!`);
    }
    else if (userInput === "list") {
        if (arr.length === 0)
            console.log("List is empty!");
        for (let i = 0; i < arr.length; i++) console.log(`${i}: ${arr[i]}`);
    }
    else if (userInput === "delete") {
        let deleteIndex = parseInt(prompt("Enter index at which you want to delete!"));
        arr.splice(deleteIndex, 1);
    }
    else console.log("Please Enter Valid Commands!");
    userInput = prompt("Enter Command!");
}
console.log("You Quit the App!");