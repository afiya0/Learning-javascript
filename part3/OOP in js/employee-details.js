class User {
    constructor(name, address, Username, email,) {
        this.name = name;
        this.address = address;
        this.Username = Username;
        this.email = email;
        this.role = "user";
    }

    checkRole()
    {
        console.log(`you are and ${this.role}`);
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}:${text}`;

        document.body.appendChild(h1);
    }
}
class Admin extends User {
    constructor(name, address, Username, email) {
        super(name, address, Username, email)
        this.role = "Admin";
    }
    remove() {
        let data = document.querySelectorAll("h1");
        data.forEach(function (e) {
            e.remove();
        }); 
    }
}
// Variation 1
var u1 = new User("Afia", "Pakistan", "pass123", "afia@gmail.com");
var a1 = new Admin("Haya", "Pakistan", "admin123", "haya@admin.com");

// Variation 2
var u2 = new User("Aiaz", "Pakistan", "secret", "aiaz@gmail.com");
var a2 = new Admin("Ali", "Pakistan", "admin456", "ali@admin.com");

// Variation 3
var u3 = new User("Ayaz", "Pakistan", "mypassword", "ayaz@gmail.com");
var a3 = new Admin("Zara", "Pakistan", "admin789", "zara@admin.com");

// Variation 4
var u4 = new User("Alina", "Pakistan", "hello123", "alina@gmail.com");
var a4 = new Admin("Hassan", "Pakistan", "admin000", "hassan@admin.com");

// Variation 5
var u5 = new User("Sara", "Pakistan", "sara321", "sara@gmail.com");
var a5 = new Admin("Bilal", "Pakistan", "admin111", "bilal@admin.com");

console.log(u1, a1);