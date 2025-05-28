interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
  location: "California",
};

const studentsList: Student[] = [student1, student2];

// Create HTML table
const table = document.createElement("table");
const tableHeader = table.insertRow();
const header1 = document.createElement("th");
const header2 = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
