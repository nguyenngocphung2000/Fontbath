document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 500);

    const apps = [
    { name: "Zalo", desc: "Ứng dụng nhắn tin phổ biến." },
    { name: "Telegram", desc: "Nhắn tin bảo mật, tốc độ cao." },
    { name: "MoMo", desc: "Ví điện tử tiện lợi." },
    { name: "Facebook", desc: "Mạng xã hội kết nối bạn bè." },
    { name: "Instagram", desc: "Chia sẻ ảnh và video." },
    { name: "TikTok", desc: "Nền tảng video ngắn sáng tạo." },
    { name: "YouTube", desc: "Xem video và nghe nhạc." },
    { name: "Spotify", desc: "Nghe nhạc trực tuyến." },
    { name: "Netflix", desc: "Xem phim và chương trình TV." },
    { name: "Google Maps", desc: "Bản đồ và chỉ đường." },
    { name: "Grab", desc: "Đặt xe và giao hàng." },
    { name: "Shopee", desc: "Mua sắm trực tuyến." },
    { name: "Lazada", desc: "Mua sắm trực tuyến." },
    { name: "Zoom", desc: "Họp trực tuyến và học từ xa." },
    { name: "Microsoft Teams", desc: "Làm việc nhóm và họp trực tuyến." },
    { name: "Google Drive", desc: "Lưu trữ và chia sẻ tệp." },
    { name: "Dropbox", desc: "Lưu trữ đám mây." },
    { name: "Evernote", desc: "Ghi chú và quản lý công việc." },
    { name: "Adobe Photoshop", desc: "Chỉnh sửa ảnh chuyên nghiệp." },
    { name: "Canva", desc: "Thiết kế đồ họa đơn giản." },
    { name: "Duolingo", desc: "Học ngôn ngữ miễn phí." },
    { name: "Coursera", desc: "Học trực tuyến từ các trường đại học." },
    { name: "LinkedIn", desc: "Mạng xã hội nghề nghiệp." },
    { name: "Twitter", desc: "Cập nhật tin tức và xu hướng." },
];

    const appList = document.getElementById("appList");

    function renderApps(filteredApps) {
        appList.innerHTML = "";
        filteredApps.forEach(app => {
            const appCard = document.createElement("div");
            appCard.className = "app-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md";
            appCard.innerHTML = `
                <h2 class="font-semibold">${app.name}</h2>
                <p>${app.desc}</p>
                <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">⬇️ Tải xuống</button>
            `;
            appList.appendChild(appCard);
        });
    }

    // Hiển thị danh sách ứng dụng ban đầu
    renderApps(apps);

    // Xử lý tìm kiếm
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchText));
        renderApps(filteredApps);
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        localStorage.setItem("darkMode", body.classList.contains("dark") ? "enabled" : "disabled");
    });
});
