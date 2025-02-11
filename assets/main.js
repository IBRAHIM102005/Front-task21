const form = document.getElementById("registrationForm");
const list = document.getElementById("list");
const btn = document.getElementById("btn");
let newListArray = [];
const li = document.createElement("li");
if (localStorage.getItem("arrayList")) {
    newListArray = localStorage.getItem("arrayList").split(",");
}
const listArray = newListArray;
addLi(newListArray);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const array = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    if (array.username == "" || array.email == "" || array.password == "") {
        alert("Tam Doldur Formu!!");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = `Username: ${array.username} | email : ${array.email} | password: ${array.password}`;
        list.appendChild(li);
        listArray.push(`Username: ${array.username} | email : ${array.email} | password: ${array.password}`);
        localStorage.setItem('arrayList', listArray);
        this.reset();
        setTimeout(() => {
            alert("Melumatlarin Elimizdedir:}")
        }, 100);

    }
})
console.log(listArray);
console.log(localStorage.getItem("arrayList"));
console.log(newListArray);
function addLi(array) {
    if (newListArray) {
        for (let i = 0; i < array.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = array[i];
            list.appendChild(li);
        }
    }
}
btn.addEventListener("click", function () {
    localStorage.clear();
    newListArray = null;
    list.innerHTML = "";

})










