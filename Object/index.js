let Girly="Admin";


let student = {
    [Girly]:"Girl",
    name: "afiya",
    department: "Information Technology",
    Year: 3,
    Semester: 5,
    subjects: "Analysis and Algorithms",
    "Cyber Security": "Sir Qamar",
    Cgpa: 3.99,
    Marks: 889,
    address: {
        Country: "Pakistan",
        city: "Hyderabad",
        location: {
            "Home Adress": "Cloth Market Liaquat colony hyderabad",
            pincode: 221100,
            union: {
                union: "Civil",
                Taluka: "Memon"
            },
        },
    },
}
let { union, Taluka } = student.address.location.union;
console.log(union);
console.log(student.address.location["Home Adress"]);
console.log(student.address.location.pincode);

console.log(student);
console.log(student.subjects);
console.log(student["Cyber Security"]);

console.log(`It is Object.keys ${Object.keys(student)}`);
console.log(`It is Object.entries ${Object.entries(student)}`);


let CsStudents = { ...student };
CsStudents["Department Head"] = "Tariq Jalbani";
CsStudents.Chairperson = "Dr.Sheeba";
for (let i in CsStudents) {
    if (typeof CsStudents[i] !== "object") {
        console.log("She is CS student SHallow Copy", i, CsStudents[i]);
    }
}



// Array + Object
let teacher = [
    { name: "Amjad", Designation: "Teacher Assistant" },
    { name: "Ufaque", Designation: "Teacher" },
    {
        name: "Anjum", Designation: "Junior Teacher"
    }];
    for(let i=0;i<teacher.length;i++){
        console.log([Object.values(teacher[i])]);
    }



let ItStudent={...CsStudents};
let AiStudent = Object.assign({}, CsStudents);
for(let i in AiStudent){
    console.log(i);
}
for (let [key, value] of Object.entries(AiStudent)) {
    console.log(`${key}:`, value);
}

let json=JSON.parse(JSON.stringify(student));

console.log(`JSON convert into strings`,json);

console.log(student.department?.location); // use for optional and handle Error



