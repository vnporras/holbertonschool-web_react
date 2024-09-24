var student1 = {
    firstName: "Vanessa",
    lastName: "Lopez",
    age: 20,
    location: "Madrid"
};
var student2 = {
    firstName: "Nicolas",
    lastName: "Cardenas",
    age: 40,
    location: "Argentina"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map