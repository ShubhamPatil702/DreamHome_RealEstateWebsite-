document.addEventListener("DOMContentLoaded", () => {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        });
        
        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
        });
    });
});
