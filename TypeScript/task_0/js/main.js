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
function renderTable(studens) {
    var tabla = document.createElement('table');
    var encabezado = tabla.createTHead();
    var filaEncabezado = encabezado.insertRow();
    var encabezados = ['Name', 'Location'];
    encabezados.forEach(function (encabezadoTexto) {
        var th = document.createElement('th');
        th.textContent = encabezadoTexto;
        filaEncabezado.appendChild(th);
    });
    var bodyTable = tabla.createTBody();
    studentsList.forEach(function (student) {
        var fila = bodyTable.insertRow();
        fila.insertCell().textContent = student.firstName;
        fila.insertCell().textContent = student.location;
    });
    document.body.appendChild(tabla);
}
renderTable(studentsList);
