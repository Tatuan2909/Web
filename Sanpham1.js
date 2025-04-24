document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "anh/xe1.1.jpg",
        "anh/xe1.2.jpg",
        "anh/xe1.3.jpg",
        "anh/xe1.4.jpg",
        "anh/xe1.5.jpg"
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById("mainImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const thumbnails = document.querySelectorAll(".thumbnail-images img");

    function showImage(index) {
        mainImage.classList.add("fade-out");
        setTimeout(() => {
            mainImage.src = images[index];
            currentIndex = index;
            updateActiveThumbnail();
            mainImage.classList.remove("fade-out");
        }, 500);
    }

    function updateActiveThumbnail() {
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.style.borderColor = index === currentIndex ? "#ff4d4f" : "#ddd";
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showImage(index);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex);

    const cartCountElement = document.getElementById("cartCount");

    function capNhatSoLuongGioHang() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalQuantity;
    }

    const buyNowBtn = document.getElementById("buyNowBtn");

    buyNowBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        capNhatSoLuongGioHang();

        alert("🛒 Đã thêm sản phẩm vào giỏ hàng!");
        window.location.href = "Giohang.html";
    });

    capNhatSoLuongGioHang();

    const product = {
        id: 1, // ID sản phẩm (có thể thay đổi theo sản phẩm)
        name: "New Grand i10",
        price: 345600000, // Giá sản phẩm
        oldPrice: 360000000, // Giá cũ (nếu có)
        quantity: 1, // Số lượng mặc định
        image: "anh/xe1.1.jpg" // Đường dẫn ảnh sản phẩm
    };
});
