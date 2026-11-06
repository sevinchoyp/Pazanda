
function searchRecipes() {
    const input = document.getElementById("searchInput");
    const searchValue = input.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".recipe-card");
    let found = 0;

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.querySelector(".tag").textContent.toLowerCase();

        if (title.includes(searchValue) || category.includes(searchValue)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        alert("Bunday retsept topilmadi!");
    }
}

function showRecipe(name) {
    alert(name + " retsepti tez orada batafsil sahifada!");
}

document.getElementById("searchInput").addEventListener("input", searchRecipes);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Xabaringiz qabul qilindi! Rahmat ❤️");
    this.reset();
});
