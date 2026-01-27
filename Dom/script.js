// ❌ React wali line hata do
// const { createElement } = require("react");


// ---------- ABOUT SECTION ----------
let about = document.querySelector("#About\\ me p");
if (about) {
  about.innerHTML = "<em><b>I AM AFIYA SIDDIQUI</b></em>";
}


// ---------- NAME CHANGE ----------
let name = document.querySelector(".name em u");
if (name) {
  name.innerText = "afiya";
}


// ---------- BUTTON TEXT ----------
let btn = document.querySelector(".btn");
if (btn) {
  btn.innerText = "Please Submit the form";
}


// ---------- GOOGLE LINK (SAFE WAY) ----------
let links = document.querySelectorAll("a");
let link = links[links.length - 1]; // last link
if (link) {
  link.innerText = "Google";
  link.setAttribute("href", "https://www.google.com");
}


// ---------- PRINT ALL LI ----------
let list = document.querySelectorAll("li");
list.forEach(val => console.log(val.innerText));


// ---------- TEXTAREA ATTRIBUTES ----------
let SetAT = document.querySelector("textarea");
if (SetAT) {
  SetAT.style.color = "red";
  SetAT.style.backgroundColor = "pink";
  SetAT.setAttribute("placeholder", "Write your Message Here");

  let id = SetAT.getAttribute("id");
  console.log(id);

  SetAT.removeAttribute("disabled");
}


// ---------- CREATE ELEMENTS ----------
let proj = document.querySelector(".project-des");

if (proj) {
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let inp = document.createElement("input");
  let btnn = document.createElement("button");

  h1.innerHTML = "<i>Hello</i>";
  p.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rerum.";

  inp.setAttribute("placeholder", "Write Something");

  btnn.innerText = "Hello from JS";
  btnn.style.color = "red";

  proj.prepend(h1, p, inp, btnn);
}


// ---------- FUNCTION ----------
function alu() {
  if (document.getElementById("list")) return;

  let orderList = document.createElement("ol");
  orderList.id = "list";

  let listItem = ["hello", "Afiya", "21", "22", "jj","hello"];
    
  for (let item of listItem) {
    let li = document.createElement("li");
   
    li.textContent = item;

    orderList.append(li);
  }

  document.body.append(orderList);
   document.querySelectorAll("#list li:nth-child(2n)").forEach(li=>{
        li.style.color="red";
    })
}

alu();
