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
});

let pock = document.querySelectorAll("p");

pock.forEach(function (p) {
    p.addEventListener("click", function () {
        p.style.fontFamily = "poppins";
    });
});
pock.forEach(function (p) {
    p.removeEventListener("click", function () {
    });
});


