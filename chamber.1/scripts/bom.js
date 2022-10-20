// Create three variables that hold references 
// to the input, button, and list elements using const.
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Create an click event listener for the Add Chapter 
// button using addEventListener and an anonymous function. 
button.addEventListener('click', function () {

    // In the function block for adding a chapter
    if (input.value.length != 0) {
        let myItem = input.value;

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.append(listText);
        listText.textContent = myItem;
        listItem.append(listBtn);
        listBtn.textContent = "X";

        list.appendChild(listItem);

        input.value = "";

        listBtn.addEventListener('click', function () {
            list.removeChild(listItem);});
    }
        input.focus();
});


