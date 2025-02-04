document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 500);

    const apps = [
        { name: "Zalo", desc: "Ứng dụng nhắn tin phổ biến." },
        { name: "Telegram", desc: "Nhắn tin bảo mật, tốc độ cao." },
        { name: "MoMo", desc: "Ví điện tử tiện lợi." },
    ];

    const appList = document.getElementById("appList");

    apps.forEach(app => {
        const appCard = document.createElement("div");
        appCard.className = "app-card p-4";
        appCard.innerHTML = `
            <h2>${app.name}</h2>
            <p>${app.desc}</p>
            <button class="download-btn">⬇️ Tải xuống</button>
        `;
        appList.appendChild(appCard);
    });

    const darkModeToggle = document.getElementById("darkModeToggle");
    const html = document.documentElement;

    if (localStorage.getItem("darkMode") === "enabled") {
        html.classList.add("dark");
    }

    darkModeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.setItem("darkMode", html.classList.contains("dark") ? "enabled" : "disabled");
    });
});
