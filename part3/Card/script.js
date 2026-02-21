let form = document.querySelector(".form");
let uname = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let photo = document.querySelector("#photo-url");

const userManager = {
    user: [],

    init: function () {
        // Load saved users when page loads
        this.user = JSON.parse(localStorage.getItem("users")) || [];
        this.renderUI();
        form.addEventListener("submit", this.submitForm.bind(this));
    },

submitForm: function (e) {
    e.preventDefault();

    if (this.editingIndex !== null) {
        // Update existing user
        this.user[this.editingIndex] = {
            uname: uname.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        };

        this.editingIndex = null; // reset after editing
    } else {
        // Add new user
        this.addUser();
    }

    localStorage.setItem("users", JSON.stringify(this.user));
    this.renderUI();
    form.reset();
},

    addUser: function () {
        this.user.push({
            uname: uname.value,
            bio: bio.value,
            role: role.value,
            photo: photo.value
        });

        // Save after adding user
        localStorage.setItem("users", JSON.stringify(this.user));
    },

    renderUI: function () {
        let cardsContainer = document.querySelector(".cards-container");
        cardsContainer.innerHTML = "";

        this.user.forEach((userData, index) => {

            let card = document.createElement("div");
            card.className = "card";

            let cross = document.createElement("i");
            cross.className = "cross fas fa-xmark";

            // Delete logic
            cross.addEventListener("click", () => {
                this.user.splice(index, 1);
                localStorage.setItem("users", JSON.stringify(this.user));
                this.renderUI();
            });


            let update = document.createElement("i");
            update.className = "update fas fa-pen";
            update.addEventListener("click", () => {
                // Fill the form with selected user's data
                uname.value = userData.uname;
                role.value = userData.role;
                bio.value = userData.bio;
                photo.value = userData.photo;

                // Store the index of the user being edited
                this.editingIndex = index;
            });

            cross.className = "cross fas fa-xmark";
            let img = document.createElement("img");
            img.src = userData.photo || "https://via.placeholder.com/150";
            img.alt = userData.uname;

            let h3 = document.createElement("h3");
            h3.textContent = userData.uname;

            let roleDiv = document.createElement("div");
            roleDiv.className = "role";
            roleDiv.textContent = userData.role;

            let bioDiv = document.createElement("div");
            bioDiv.className = "bio";
            bioDiv.textContent = userData.bio;

            card.appendChild(cross);   // ← You forgot this
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(roleDiv);
            card.appendChild(bioDiv);
            card.appendChild(update);

            cardsContainer.appendChild(card);
        });
    },
    removeUser: function () { }
};

userManager.init();