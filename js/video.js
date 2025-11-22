// отримуємо елементи
console.log("first");
const playBtn = document.getElementById("playBtn");
const preview = document.getElementById("videoBlock");
const video = document.getElementById("realVideo");
console.log(playBtn);
// обробник кліку на кнопку Play
playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    preview.classList.add("hidden");
    video.classList.remove("hidden");
    video.muted = true;
    video.play();
});

// обробник закінчення відео
video.addEventListener("ended", () => {
    video.classList.add("hidden"); // ховаємо відео
    preview.classList.remove("hidden"); // показуємо прев'ю
});
