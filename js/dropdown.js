document.addEventListener("click", (e) => {
    const toggle = e.target.closest("[data-dropdown]");
    const dropdown = document.querySelector(".dropdown-wrapper");

    // Клік по кнопці — переключаємо меню
    if (toggle) {
        e.preventDefault();
        dropdown.classList.toggle("active");
        return;
    }

    // Якщо клік поза меню — закриваємо
    if (!e.target.closest(".dropdown-wrapper")) {
        dropdown.classList.remove("active");
    }
});
