const alert = document.querySelector(".alert");
const form = document.querySelector(".groccery-form");
const grocerry = document.getElementById("grocerry");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocerry-container");
const list = document.querySelector(".groccery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();
    const value = grocerry.value
    const id = new Date().getTime().toString
}