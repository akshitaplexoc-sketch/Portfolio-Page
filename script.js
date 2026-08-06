// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================
// TYPING ANIMATION
// ==========================

const typingWords = [
    "Computer Science Student",
    "AI/DS Student",
    "Backend Developer",
    "Python Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing");

function typeEffect() {

    if (!typingText) return;

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === typingWords.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();

// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});
// ==========================
// ACTIVE NAVBAR
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Current Year

document.getElementById("year").textContent =
new Date().getFullYear();
const params = new URLSearchParams(window.location.search);

if (params.get("success")) {
    alert("✅ Thank you! Your message has been sent successfully.");
}
// ======================
// EmailJS Contact Form
// ======================

emailjs.init("kqNGeC_hCZ4q0inr_");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_adb3qxu",
        "template_xuplx38",
        this
    )

    .then(() => {

        alert("✅ Message sent successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        alert("❌ Failed to send message.");

        console.log(error);

    });

});
