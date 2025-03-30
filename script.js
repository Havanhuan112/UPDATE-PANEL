function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === "havanhuan" && password === "2ksub") {
        loginMessage.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Đang đăng nhập...`;
        
        setTimeout(() => {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("menu-container").style.display = "block";
        }, 3000);
    } else {
        loginMessage.innerHTML = `<span style="color: red;">Sai tài khoản hoặc mật khẩu!</span>`;
    }
}
function toggleSwitch(element) {
    setTimeout(() => {
        // Không thay đổi trạng thái, chỉ áp dụng hiệu ứng chuyển đổi
    }, 2000);
}
function redirectToFacebook() {
    window.location.href = "https://www.facebook.com/profile.php?id=61561543393412";
}
// thông báo 
document.addEventListener("DOMContentLoaded", function() {
    // Kiểm tra nếu đã lưu thông tin tài khoản
    if (localStorage.getItem("savedUsername")) {
        document.getElementById("username").value = localStorage.getItem("savedUsername");
        document.getElementById("password").value = localStorage.getItem("savedPassword");
        document.getElementById("saveIcon").classList.replace("far", "fas");
        document.getElementById("saveIcon").classList.replace("fa-square", "fa-check-square");
        document.getElementById("saveIcon").style.color = "limegreen";
    }
});

function toggleSaveLogin() {
    let saveIcon = document.getElementById("saveIcon");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (saveIcon.classList.contains("fa-square")) {
        saveIcon.classList.replace("fa-square", "fa-check-square");
        saveIcon.classList.replace("far", "fas");
        saveIcon.style.color = "limegreen";
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
    } else {
        saveIcon.classList.replace("fa-check-square", "fa-square");
        saveIcon.classList.replace("fas", "far");
        saveIcon.style.color = "";
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
    }
}
function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("current-time").innerText = `${hours}:${minutes}:${seconds}`;
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);
updateTime();
// Đặt thời gian hết hạn (YYYY, MM - 1, DD, HH, MM, SS)
const expirationTime = new Date(2025, 2, 28, 23, 59, 59).getTime();

function updateCountdown() {
    let now = new Date().getTime();
    let distance = expirationTime - now;

    if (distance <= 0) {
        document.getElementById("countdown-timer").innerText = "Đã hết hạn";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);
updateCountdown();

// sáng và tối 
function updateGreeting() {
    let now = new Date();
    let hours = now.getHours();
    let greetingText = "";
    let icon = document.querySelector(".greeting-container i");

    if (hours >= 5 && hours < 12) {
        greetingText = "Sáng Rồi Dậy Đánh Răng Rửa Mặt Ăn Sáng Đê Cu🌜";
        icon.className = "fas fa-sun"; // Icon mặt trời
        icon.style.color = "#FFD700"; // Vàng
    } else if (hours >= 12 && hours < 18) {
        greetingText = "Chiều Rồi Ăn Cơm Chưa em🍚";
        icon.className = "fas fa-cloud-sun"; // Icon nửa nắng
        icon.style.color = "#FFA500"; // Cam
    } else {
        greetingText = "Tối Rồi Ngủ Đi Thằng em 👻";
        icon.className = "fas fa-moon"; // Icon mặt trăng
        icon.style.color = "#87CEEB"; // Xanh nhạt
    }

    document.getElementById("greeting-message").innerText = greetingText;
}

// Cập nhật khi tải trang
updateGreeting();

// nhạc cháy hêhheh
        function closeLoadingBox() {
            document.getElementById("loading-box").style.display = "none";
        }

        function getDeviceInfo() {
            let deviceName = navigator.userAgent;
            let apiInfo = window.location.href;

            document.getElementById("device-name").textContent = deviceName;
            document.getElementById("device-api").textContent = "API: " + apiInfo;

            // Lấy địa chỉ IP bằng API (sử dụng dịch vụ công khai)
            fetch('https://api64.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    document.getElementById("device-ip").textContent = data.ip;
                })
                .catch(error => {
                    document.getElementById("device-ip").textContent = "Không xác định";
                });
        }

        window.onload = getDeviceInfo;
   
// hiệu ứng giọt nước 
function createRain() {
    const rainContainer = document.querySelector(".rain-container");

    for (let i = 0; i < 5; i++) { // Giảm số giọt nước mỗi lần tạo xuống 5
        let drop = document.createElement("i");
        drop.classList.add("fas", "fa-tint", "water-drop");
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDuration = (Math.random() * 3 + 4) + "s"; // Tăng thời gian rơi (4 - 7s)
        drop.style.fontSize = (Math.random() * 10 + 15) + "px"; // Kích thước giọt nước ngẫu nhiên
        rainContainer.appendChild(drop);

        // Khi giọt nước chạm đất, tạo gợn sóng
        drop.addEventListener("animationend", () => {
            let ripple = document.createElement("div");
            ripple.classList.add("ripple");
            ripple.style.left = drop.style.left;
            ripple.style.bottom = "0px";
            rainContainer.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 800); // Gợn sóng kéo dài 0.8s

            drop.remove();
        });
    }
}

// Giảm tần suất rơi nước (Tạo nước mỗi 2 giây thay vì 0.5s)
setInterval(createRain, 2000);

// nenu 
    function openModMenu() {
        document.getElementById("mod-menu").style.display = "block";
    }

    function closeModMenu() {
        document.getElementById("mod-menu").style.display = "none";
    }
    function playBeep() {
        let context = new (window.AudioContext || window.webkitAudioContext)();
        let oscillator = context.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(1000, context.currentTime);
        oscillator.connect(context.destination);
        oscillator.start();
        setTimeout(() => oscillator.stop(), 200);
    }
// dipi máy

// Mở modal nhập số
    function openInputModal() {
      document.getElementById("input-modal").style.display = "flex";
    }
    // Xử lý khi ấn OK trong modal nhập số
    function submitNumber() {
      const num = parseInt(document.getElementById("number-input").value);
      if (isNaN(num) || num < 50 || num > 350) {
        alert("Vui lòng nhập số trong khoảng từ 50 đến 350!");
      } else {
        document.getElementById("input-modal").style.display = "none";
        showNotification();
      }
    }
    // Hiển thị thông báo "Đã nhập Dipi"
    function showNotification() {
      const notif = document.getElementById("notification-modal");
      notif.style.display = "block";
      playBeep();
      // Ẩn thông báo sau 3 giây
      setTimeout(() => {
        notif.style.display = "none";
      }, 3000);
    }