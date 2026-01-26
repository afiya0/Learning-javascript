let name = document.querySelector(".name em u");
name.innerText = "afiya";

let btn = document.querySelector(".btn");
btn.innerText = "Please Submit the form";

let link = document.querySelectorAll("li,a")[11];
link.innerText = "Google";
link.setAttribute("href", "https://www.google.com");



// Attribute Mainupulation
let SetAT = document.querySelector("textarea");

SetAT.style.cssText = "color:red; background-color:pink"
SetAT.setAttribute("placeholder", "Write your Message Here");

let id = SetAT.getAttribute("id");
console.log(id);

SetAT.removeAttribute("disabled");


// Create Element
let proj = document.querySelector(".project-des");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let inp=document.createElement("input");
inp.setAttribute("placeholder","Write Somrthing");
p.innerText = "loremThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
h1.innerText = "Project";
h1.innerHTML="<i>Hello</i>";
proj.prepend(h1,p,inp);

