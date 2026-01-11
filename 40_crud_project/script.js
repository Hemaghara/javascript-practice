//JSON.parse() :==>converts a JSON-formatted string into a JavaScript object.


let users =JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("userForm");
const tableBody = document.getElementById("userTableBody");

displayUsers();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const gender = document.getElementById("gender").value;
  const editIndex = document.getElementById("editIndex").value;

  const userData = { name, email, address, gender };

  if (editIndex === "") {
    users.push(userData);
  } else {
    users[editIndex] = userData;
    document.getElementById("editIndex").value = "";
  }
 
  saveToLocalStorage();
  form.reset();
  displayUsers();
});

function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

function displayUsers() {
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.gender}</td>
        <td>
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editUser(index) {
  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("address").value = user.address;
  document.getElementById("gender").value = user.gender;
  document.getElementById("editIndex").value = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  saveToLocalStorage();
  displayUsers();
}
