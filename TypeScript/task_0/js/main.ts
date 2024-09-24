interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Vanessa",
    lastName: "Lopez",
    age: 20,
    location: "Madrid"
};

const student2: Student = {
    firstName: "Nicolas",
    lastName: "Cardenas",
    age: 40,
    location: "Argentina"
};

const studentsList: Student[] = [student1, student2];

function renderTable(studens: Student[]): void {
    const table: HTMLTableElement = document.createElement('table');

    const headerTable = table.createTHead();
    const headerRow = headerTable.insertRow();
    const headersTable = ['Name', 'Location'];

    headersTable.forEach(headerText => {
        const th = document.createElement('th'); 
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    const bodyTable = table.createTBody();

    studentsList.forEach(student => {
        const fila = bodyTable.insertRow();
        fila.insertCell().textContent = student.firstName;
        fila.insertCell().textContent = student.location;
    });

    document.body.appendChild(table);
}
renderTable(studentsList);

//th(table header cell), tr(table row), td(Table Data)
