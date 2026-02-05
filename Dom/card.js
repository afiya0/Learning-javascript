let inp = document.querySelectorAll("input");
let form = document.querySelector("form");
let main = document.querySelector("#main");

form.addEventListener("submit", function (d) {
    d.preventDefault();

    let isEmpty = false;
    inp.forEach(function (i) {
        if (i.value.trim() === "") {
            isEmpty = true;
        }
    })
    if (isEmpty) {
        alert("fill the form");
        return;
    }
    let card = document.createElement("div");
    let profile = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");

    card.classList.add("card");
    profile.classList.add("profile");

    img.setAttribute("src", inp[0].value);

    h3.textContent = inp[1].value;
    h5.textContent = inp[2].value;
    p.textContent = inp[3].value;

    main.appendChild(card);
    card.appendChild(profile);
    profile.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    inp.forEach(function (i) {
        if (i.type !== "submit") {
            i.value = "";
        }
    });

});

