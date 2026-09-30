// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("mobile-open");

}


// ===============================
// CONTACT MESSAGE
// ===============================

function showMessage() {

    alert(
        "Thank you for your interest in Nanoverse Solutions.\n\n" +
        "Contact functionality can be connected to your backend."
    );

}


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(
        ".division-card, .technology-box"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});