// Run only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // ====== NAVIGATION CLICK + SMOOTH SCROLL + ACTIVE STATE ======
    const navItems = document.querySelectorAll(".nav ul li[data-target]");

    navItems.forEach((li) => {
        li.addEventListener("click", () => {
            const targetId = li.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }

            // Set active class
            navItems.forEach((item) => item.classList.remove("active"));
            li.classList.add("active");
        });
    });

    // ====== BUY NOW BUTTONS + CART COUNTER ======
    const cartCountElement = document.getElementById("cart-count");
    const buyButtons = document.querySelectorAll(".buy-btn");
    let cartCount = 0;

    buyButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Small feedback animation
            const originalText = btn.textContent;
            btn.textContent = "ADDED!";
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 800);
        });
    });

    // ====== AUTO-UPDATE YEAR IN FOOTER ======
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
