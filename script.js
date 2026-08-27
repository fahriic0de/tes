/* =========================================
   FAHRI XD - CYBER SECURITY PORTFOLIO
   ========================================= */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.innerHTML =
            isOpen ? "✕" : "☰";

    });


    /* Close menu when clicking a link */

    const navLinks =
        nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.innerHTML = "☰";

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const topButton =
    document.getElementById("topButton");


if (topButton) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ================= TERMINAL TYPING ================= */

const cursor =
    document.querySelector(".cursor");


if (cursor) {

    setInterval(() => {

        cursor.style.opacity =
            cursor.style.opacity === "0"
                ? "1"
                : "0";

    }, 550);

}


/* ================= SMOOTH INTERNAL LINKS ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId === ""
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* ================= CONSOLE ================= */

console.log(
    "%c FAHRI XD ",
    "background:#2563eb;color:white;font-size:20px;font-weight:bold;padding:8px;"
);

console.log(
    "%c Cyber Security Portfolio ",
    "color:#38bdf8;font-size:14px;"
);

console.log(
    "System online."
);
