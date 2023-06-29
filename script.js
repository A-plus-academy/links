let blob = document.querySelector(".blob");
let card = document.querySelectorAll(".link div");
let title = document.querySelector("h1 span");
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, { duration: 3000, fill: "forwards" });
});

let chekSize = () => {
    if (window.innerWidth < 768) {
        blob.style.display = "none";
    } else {
        blob.style.display = "block";
    };
    card.forEach((card) => {
        window.innerWidth > 768 ? card.style.height = `${card.getBoundingClientRect().width / 2}px` : card.style.height = `${card.getBoundingClientRect().width / 2.5}px`;
    });

};

window.addEventListener('resize', chekSize);

chekSize();
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
title.onmouseover = (e) => {
    let itterations = 0;
    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("").map((letter, index) => {
            if (letter === " ") return letter;
            if (index < itterations) {
                return e.target.dataset.text[index];
            } else {
                return letters[Math.floor(Math.random() * 26)];
            }
        }).join("");
        if (itterations > 14) clearInterval(interval);
        itterations++;
    }, 50);

};