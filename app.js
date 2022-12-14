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
