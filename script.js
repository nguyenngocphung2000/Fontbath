document.addEventListener("DOMContentLoaded", function () {
    // Ẩn preloader sau khi trang tải xong
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 500); // 0.5 giây để tránh giật lag
});

    // Danh sách ứng dụng
    const apps = [
        { name: "Zalo", desc: "Ứng dụng nhắn tin phổ biến." },
        { name: "Telegram", desc: "Nhắn tin bảo mật, tốc độ cao." },
        { name: "MoMo", desc: "Ví điện tử tiện lợi." },
        { name: "Shopee", desc: "Mua sắm trực tuyến." },
        { name: "Grab", desc: "Gọi xe nhanh chóng." },
        { name: "Facebook", desc: "Mạng xã hội lớn nhất thế giới." },
        { name: "TikTok", desc: "Xem video ngắn thú vị." },
        { name: "YouTube", desc: "Nền tảng video lớn nhất." },
        { name: "Google Maps", desc: "Bản đồ, chỉ đường." },
        { name: "Lazada", desc: "Mua sắm online giá tốt." }
    ];

    const appList = document.getElementById("appList");

    apps.forEach(app => {
        const appCard = document.createElement("div");
        appCard.className = "app-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md";
        appCard.innerHTML = `
            <h2 class="font-semibold">${app.name}</h2>
            <p>${app.desc}</p>
            <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Tải xuống</button>
        `;
        appList.appendChild(appCard);
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Kiểm tra trạng thái dark mode từ localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
}

// Xử lý bật/tắt chế độ tối
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark") ? "enabled" : "disabled");
});

    // Tìm kiếm ứng dụng
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        document.querySelectorAll(".app-card").forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();
            card.style.display = title.includes(searchText) ? "block" : "none";
        });
    });
});
