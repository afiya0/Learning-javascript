let aevent = document.querySelectorAll(" h3");
aevent.forEach(function (h3) {
    h3.addEventListener("click", function () {
        alert("hello");
    });
});
let bevent = document.querySelectorAll("em");
bevent.forEach(function (em) {
    em.addEventListener("mouseover", function () {
        em.style.color = "purple";
    });

    em.addEventListener("mouseout", function () {
        em.style.backgroundColor = "beige";
    });
});
let pocke = document.querySelectorAll("li");

function fname(e) { 
  e.target.style.color = "red";
  e.target.style.backgroundColor="black";
}

pocke.forEach(p => {
  p.addEventListener("mouseover", fname);
});

// pocke.forEach(p=>{
//     p.removeEventListener("mouseover",fname);
// })

