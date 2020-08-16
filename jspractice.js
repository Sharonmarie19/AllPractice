let buttonElement = document.queryCommandValue("#btn");
let inputElement = document.queryCommandValue("#input");

let inputArray =[];

function onButtonClick(){
    inputArray.push(inputElement.value);
    console.log(inputArray);
}
buttonElement.addEventListener("click", onButtonClick);