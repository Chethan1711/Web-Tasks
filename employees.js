let employees = [
    {"id":1,"first_name":"Wendye","last_name":"Somerled","email":"wsomerled0@amazon.co.jp","gender":"Female","country":"Thailand"},
    {"id":2,"first_name":"Chas","last_name":"Kermit","email":"ckermit1@soup.io","gender":"Male","country":"Indonesia"},
    {"id":3,"first_name":"Pauli","last_name":"Tracey","email":"ptracey2@chron.com","gender":"Female","country":"Brazil"},
    {"id":4,"first_name":"Perle","last_name":"Abbyss","email":"pabbyss3@nytimes.com","gender":"Female","country":"Poland"},
    {"id":5,"first_name":"Nicolai","last_name":"Muskett","email":"nmuskett4@ning.com","gender":"Male","country":"Japan"},
    {"id":6,"first_name":"Anselm","last_name":"Brandel","email":"abrandel5@dagondesign.com","gender":"Male","country":"Poland"},
    {"id":7,"first_name":"Nissie","last_name":"Sinnie","email":"nsinnie6@blogs.com","gender":"Female","country":"France"},
    {"id":8,"first_name":"Trix","last_name":"O'Spillane","email":"tospillane7@unblog.fr","gender":"Female","country":"United States"},
    {"id":9,"first_name":"Celka","last_name":"Fanshawe","email":"cfanshawe8@hibu.com","gender":"Female","country":"Malaysia"},
    {"id":10,"first_name":"Sloane","last_name":"Coneybeer","email":"sconeybeer9@springer.com","gender":"Male","country":"Macedonia"}
];

// Function to display employees
function displayEmployees(emps) {
    if (emps.length >= 1) {
        let eachEmp = ``;
        emps.forEach((emp) => {
            eachEmp += `<tr>
                <td>${emp.id}</td>
                <td>${emp.first_name}</td>
                <td>${emp.last_name}</td>
                <td>${emp.email}</td>
                <td>${emp.gender}</td>
                <td>${emp.country}</td>
            </tr>`;
        });
        document.querySelector('#display').innerHTML = eachEmp;
    } else {
        document.querySelector('#display').innerHTML = `<tr><td colspan="6">No rows available</td></tr>`;
    }
}

// Filter and display all employees
let allEmpsBtn = document.querySelector('#all-emps');
allEmpsBtn.addEventListener('click', () => {
    displayEmployees(employees);
});

// Filter and display male employees
let maleEmpBtn = document.querySelector('#male-emps');
maleEmpBtn.addEventListener('click', () => {
    let maleEmps = employees.filter(emp => emp.gender === 'Male');
    displayEmployees(maleEmps);
});

// Filter and display female employees
let femaleEmpBtn = document.querySelector('#female-emps');
femaleEmpBtn.addEventListener('click', () => {
    let femaleEmps = employees.filter(emp => emp.gender === 'Female');
    displayEmployees(femaleEmps);
});

// Search functionality
let userName = document.querySelector('#usn');
userName.addEventListener('keyup', function() {
    let enteredUsn = userName.value;
    if (enteredUsn.trim() === '') {
        document.querySelector('#display').innerHTML = `<tr><td colspan="6">No rows available</td></tr>`;
    } else {
        let filteredEmps = empSearchData(enteredUsn, employees);
        displayEmployees(filteredEmps);
    }
});

// Search employees by first name
function empSearchData(val, emps) {
    val = val.toUpperCase().trim();
    let filteredEmps = emps.filter(emp => emp.first_name.toUpperCase().includes(val));
    return filteredEmps;
}

// Initial display of all employees
displayEmployees(employees);
