const btn = document.querySelector(".btn");
const ul = document.querySelector(".items");
ul.firstElementChild.textContent = "hello";
ul.children[1].innerHTML = "<h1>Hello</h1>";
btn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e.target.className);
	document.getElementById("my-form").style.background = "#ccc";
	document.querySelector("body").classList.add("bg-dark");
	ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
	document.querySelector(".container").append(nameInput.value);
});

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onSubmit(e) {
	e.preventDefault();
	if (nameInput.value === "" || emailInput.value === "") {
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";
		setTimeout(() => {
			msg.remove();
		}, 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('${nameInput.value}:${emailInput.value}'));
    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}
