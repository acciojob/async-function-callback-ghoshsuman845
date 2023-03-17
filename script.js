const url = "https://jsonplaceholder.typicode.com/posts/1";
const btn = document.getElementById("btn");

//your JS code here. If required.
async function fetchData(showTitle) {
const response = await fetch(url);
const data = await response.json();
showTitle(data.title);
}

function showMessage(message) {
const output = document.getElementById("output");
output.textContent = message;
}

btn.addEventListener("click", () => fetchData(showMessage));
