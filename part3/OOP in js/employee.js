function Employee(name, age, country, nic, num, resident, shirt) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.nic = nic;
    this.num = num;
    this.resident = resident;
    this.shirt = shirt;


    this.write = function (text) {
        let h1 = document.createElement("h1");
        document.body.appendChild(h1);
        h1.style.color = this.shirt;
        h1.textContent = text;

        h1.innerHTML = `
        Name: ${this.name} <br>
        Age: ${this.age} <br>
        Country: ${this.country} <br>
        NIC: ${this.nic} <br>
        Number: ${this.num} <br>
        Resident: ${this.resident}<br>
        Company: ${this.company}<br>
        Owner:${this.owner}
        `;
    };
}
Employee.prototype.owner = "Siddiqui Dolls";
Employee.prototype.company = "ASAL.co";
let employee1 = new Employee(
    "afiya",
    22,
    "Pakistan",
    "00001110",
    90109981,
    "Hyderabad",
    "red",
);
let employee2 = new Employee(
    "afiya",
    22,
    "Pakistan",
    "00001110",
    90109981,
    "Hyderabad",
    "blue",
);

employee2.write();
employee1.write();


