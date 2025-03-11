document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector("main input");

    searchBox.addEventListener("focus", function () {
        this.style.borderColor = "#ff7043";
    });

    searchBox.addEventListener("blur", function () {
        this.style.borderColor = "#d32f2f";
    });

    console.log("Tomato - Order Food Online script loaded.");
});
