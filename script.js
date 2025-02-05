document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 500);

    const apps = [
        { name: "Zalo", desc: "Ứng dụng nhắn tin phổ biến.", link: "https://zalo.me/download" },
        { name: "Telegram", desc: "Nhắn tin bảo mật, tốc độ cao.", link: "https://telegram.org/apps" },
        { name: "MoMo", desc: "Ví điện tử tiện lợi.", link: "https://momo.vn/download" },
        { name: "Facebook", desc: "Mạng xã hội kết nối bạn bè.", link: "https://www.facebook.com/mobile" },
        { name: "Instagram", desc: "Chia sẻ ảnh và video.", link: "https://www.instagram.com/download" },
        { name: "TikTok", desc: "Nền tảng video ngắn sáng tạo.", link: "https://www.tiktok.com/download" },
        { name: "YouTube", desc: "Xem video và nghe nhạc.", link: "https://www.youtube.com/download" },
        { name: "Spotify", desc: "Nghe nhạc trực tuyến.", link: "https://www.spotify.com/download" },
        { name: "Netflix", desc: "Xem phim và chương trình TV.", link: "https://www.netflix.com/download" },
        { name: "Google Maps", desc: "Bản đồ và chỉ đường.", link: "https://www.google.com/maps/download" },
        { name: "Grab", desc: "Đặt xe và giao hàng.", link: "https://www.grab.com/vn/download" },
        { name: "Shopee", desc: "Mua sắm trực tuyến.", link: "https://shopee.vn/download" },
        { name: "Lazada", desc: "Mua sắm trực tuyến.", link: "https://www.lazada.vn/download" },
        { name: "Zoom", desc: "Họp trực tuyến và học từ xa.", link: "https://zoom.us/download" },
        { name: "Microsoft Teams", desc: "Làm việc nhóm và họp trực tuyến.", link: "https://www.microsoft.com/teams/download" },
        { name: "Google Drive", desc: "Lưu trữ và chia sẻ tệp.", link: "https://www.google.com/drive/download" },
        { name: "Dropbox", desc: "Lưu trữ đám mây.", link: "https://www.dropbox.com/download" },
        { name: "Evernote", desc: "Ghi chú và quản lý công việc.", link: "https://evernote.com/download" },
        { name: "Adobe Photoshop", desc: "Chỉnh sửa ảnh chuyên nghiệp.", link: "https://www.adobe.com/photoshop" },
        { name: "Canva", desc: "Thiết kế đồ họa đơn giản.", link: "https://www.canva.com/download" },
        { name: "Duolingo", desc: "Học ngôn ngữ miễn phí.", link: "https://www.duolingo.com/download" },
        { name: "Coursera", desc: "Học trực tuyến từ các trường đại học.", link: "https://www.coursera.org/download" },
        { name: "LinkedIn", desc: "Mạng xã hội nghề nghiệp.", link: "https://www.linkedin.com/download" },
        { name: "Twitter", desc: "Cập nhật tin tức và xu hướng.", link: "https://www.twitter.com/download" },
    ];

    function renderApps(filteredApps) {
        const appList = document.getElementById("appList");
        appList.innerHTML = "";
        filteredApps.forEach(app => {
            const appCard = document.createElement("div");
            appCard.className = "app-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md";
            appCard.innerHTML = `
                <h2 class="font-semibold">${app.name}</h2>
                <p>${app.desc}</p>
                <a href="${app.link}" target="_blank" class="download-btn">
                    Tải xuống
                </a>
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

    // Ngăn chặn menu chuột phải
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Ngăn chặn sao chép nội dung
    document.addEventListener("copy", function(event) {
        event.preventDefault();
    });
    
});
// Chức năng cho nút menu để hiển thị hoặc ẩn nội dung
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menuDropdown');
    // Toggle hiển thị menu
    menu.classList.toggle('hidden');
});
