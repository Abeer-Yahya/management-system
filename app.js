function Employee(id, name, department, level, imageURL, salary) {
  this.EmployeeID = id;
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salary(level);
  function salary(level) {
    switch (level) {
      case "junior":
        return getRandomInt(500, 1000);
      case "mid-senior":
        return getRandomInt(1000, 1500);
      case "senior":
        return getRandomInt(1500, 2000);
    }
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  /*function image(imageURL) {
    var img = document.createElement("img");
    col.appendChild(img);
    const att = document.createAttribute("src");
    att.value = "imageURL";
  }*/
}

let employees = [
  new Employee(
    "1000",
    "Ghazi Samer",
    "Administration",
    "senior",
    "https://randomuser.me/api/portraits/men/75.jpg"
  ),
  new Employee(
    "1001",
    "Lana Ali",
    "Finance",
    "senior",
    "https://randomuser.me/api/portraits/women/75.jpg"
  ),
  new Employee(
    "1002",
    "Tamara Ayoube",
    "Marketing",
    "senior",
    "https://randomuser.me/api/portraits/women/79.jpg"
  ),
  new Employee(
    "1003",
    "Safi Walid",
    "Administration",
    "mid-senior",
    "https://randomuser.me/api/portraits/men/79.jpg"
  ),
  new Employee(
    "1004",
    "Omar Zaid",
    "Development",
    "senior",
    "https://randomuser.me/api/portraits/men/81.jpg"
  ),
  new Employee(
    "1005",
    "Rana Saleh",
    "Development",
    "junior",
    "https://randomuser.me/api/portraits/women/10.jpg"
  ),
  new Employee(
    "1006",
    "Hadi Ahmad",
    "Finance",
    "mid-senior",
    "https://randomuser.me/api/portraits/men/85.jpg"
  ),
];
for (const Employee of employees) {
  console.log(Employee.fullName + " " + Employee.salary);
}
/*
//SELECTING THE MAIN
const main = document.querySelector("main");

//CREATING THE TABLE
var table = document.createElement("table");
main.appendChild(table);

var col = Object.keys(employees[0]);

// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1); // TABLE ROW.

for (var i = 0; i < col.length; i++) {
  var th = document.createElement("th"); // TABLE HEADER.
  th.innerHTML = col[i];
  tr.appendChild(th);
}

// ADD OBJECT DATA TO THE TABLE AS ROWS.
for (var i = 0; i < employees.length; i++) {
  tr = table.insertRow(-1);

  for (var j = 0; j < col.length; j++) {
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = employees[i][col[j]];
  }
}
*/
const main = document.querySelector("main");

let form = document.querySelector("form");
let cardContainer = document.getElementById("cardContainer");

function data(event) {
  let id = document.getElementById("id").value;
  let fullName = document.getElementById("fname").value;
  let department = document.getElementById("select1").value;
  let level = document.getElementById("select2").value;
  let imageUrl = document.getElementById("image").value;
  let employeeForm = new Employee(id, fullName, department, level, imageUrl);
  console.log(employeeForm);
  createCard(employeeForm);
  event.preventDefault();
}

form.addEventListener("submit", data);
//using Bootstrap card classes
function createCard(employeeForm) {
  let divCol = document.createElement("div");
  divCol.className = "col-sm-6";
  cardContainer.append(divCol);

  let card = document.createElement("div");
  card.className = "card";
  divCol.append(card);

  let imgCard = document.createElement("img");
  imgCard.className = "card-img-top";
  imgCard.style.width = "50px";
  imgCard.src = employeeForm.imageUrl;
  card.append(imgCard);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.append(cardBody);

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = "Employee";
  cardBody.append(cardTitle);

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent =
    "Name: " +
    employeeForm.fullName +
    " - ID: " +
    employeeForm.EmployeeID +
    " Department: " +
    employeeForm.department +
    " - Level: " +
    employeeForm.level;
  cardBody.append(cardText);
}
