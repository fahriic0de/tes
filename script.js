function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector("nav")
            .classList.remove("active");

    });

});


// Simple terminal typing effect

const terminalText = [
    "cybersecurity enthusiast",
    "web security learner",
    "penetration testing student",
    "security researcher"
];

let index = 0;

const terminalStatus =
    document.querySelector(".terminal-body .green");

setInterval(() => {

    if (!terminalStatus) return;

    index = (index + 1) % terminalText.length;

    terminalStatus.textContent =
        terminalText[index];

}, 2500);
