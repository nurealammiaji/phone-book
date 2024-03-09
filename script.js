const name = document.getElementById("name");
const phone = document.getElementById("phone");
const list = document.getElementById("list");
const item = document.getElementById("item");

document.getElementById("submit").addEventListener("click", function () {
    const li = document.createElement("li");
    li.innerHTML = `
    <div id="item" class="flex items-center justify-evenly my-3 bg-white p-2 rounded-md border border-purple-300">
    <p class="text-lg mr-2">${name.value}</p>
    <p class="text-lg mr-2">${phone.value}</p>
    <button id="edit" class="bg-green-400 py-1 px-2 text-white mr-2 rounded-md">Edit</button>
    <button id="delete" class="bg-red-400 py-1 px-2 text-white rounded-md">Delete</button>
    </div>
    `;

    if (name.value && phone.value) {
        list.appendChild(li);
        name.value = "";
        phone.value = "";
    }
    else {
        alert("Name and Phone is required !!");
        return;
    };

})
