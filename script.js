// Chế độ tối
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Kiểm tra trạng thái dark mode đã lưu
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark") ? "enabled" : "disabled");
});

// Tìm kiếm ứng dụng
const searchInput = document.getElementById("search");
const appCards = document.querySelectorAll(".app-card");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    appCards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = title.includes(searchText) ? "block" : "none";
    });
});
