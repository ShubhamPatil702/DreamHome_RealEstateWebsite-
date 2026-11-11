document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".terms-container", { opacity: 1, duration: 1, y: -20 });

    let termsItems = document.querySelectorAll(".terms-item");

    termsItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.querySelector(".terms-content");
            gsap.to(content, { height: "toggle", opacity: "toggle", duration: 0.3 });
        });
    });
});
