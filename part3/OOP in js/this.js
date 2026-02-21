function ShowRoom(pname, color, model, plate, type, purchase) {
    this.pname = pname;
    this.color = color;
    this.model = model;
    this.plate = plate;
    this.type = type;
    this.purchase = purchase;
}
ShowRoom.prototype.seater=5;
ShowRoom.prototype.company = "Revo";
ShowRoom.prototype.showInfo = function () {
    console.log(`Name: ${this.pname}, Company: ${this.company}, Color: ${this.color} , model ${this.model},plateNo ${this.plate},Puraches ${this.purchase} , Type ${this.type} Seater ${this.seater}`);
}

let car1 = new ShowRoom("Shaha", "red", "A12", 7857756, "Auto", true );
let car2 = new ShowRoom("Afiya", "blue", "17c", 99990999, "Auto", true);
let car3 = new ShowRoom("Bushra", "red", "A12", 432455, "Auto", false);

// console.log(car1, car2, car3);
car1.showInfo();
car2.showInfo();
