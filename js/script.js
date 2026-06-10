// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {


const loader = document.getElementById("loader");

setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

}, 1500);


});

// ==========================================
// AOS INITIALIZATION
// ==========================================

AOS.init({
duration: 1000,
once: true,
offset: 100
});

// ==========================================
// TYPING ANIMATION
// ==========================================

new Typed("#typed-role", {


strings: [
    "Production Support Engineer",
    "Full Stack Developer",
    "Automation Engineer",
    "Cloud Support Engineer",
    "Python Developer",
    "IBM Technical Support Engineer"
],

typeSpeed: 60,
backSpeed: 35,
backDelay: 1800,
loop: true

});

// ==========================================
// CURSOR GLOW EFFECT
// ==========================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {


glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";


});

// ==========================================
// SCROLL TO TOP
// ==========================================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}
```

});

scrollBtn.addEventListener("click", () => {

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

});

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {


let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href")
        .includes(current)
    ) {
        link.classList.add("active");
    }

});


});

// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {


navMenu.classList.toggle("show-menu");


});

// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

document.querySelectorAll(".nav-links a")
.forEach(link => {


link.addEventListener("click", () => {

    navMenu.classList.remove("show-menu");

});

});

// ==========================================
// HERO LETTER ANIMATION
// ==========================================

const heroLetters =
document.querySelectorAll(".hero-name span");

heroLetters.forEach((letter, index) => {


letter.style.animationDelay =
`${index * 0.08}s`;


});

// ==========================================
// PARALLAX EFFECT
// ==========================================

window.addEventListener("mousemove", (e) => {


const avatar =
document.querySelector(".hero-avatar");

if (!avatar) return;

const x =
(window.innerWidth / 2 - e.pageX) / 40;

const y =
(window.innerHeight / 2 - e.pageY) / 40;

avatar.style.transform =
`translate(${x}px, ${y}px)`;


});

// ==========================================
// PROJECT CARD HOVER EFFECT
// ==========================================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {


card.addEventListener("mousemove", (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `
    radial-gradient(
    circle at ${x}px ${y}px,
    rgba(139,92,246,0.18),
    rgba(255,255,255,0.04)
    )`

    ;

});

card.addEventListener("mouseleave", () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

});


});

// ==========================================
// SKILL CARD FLOAT EFFECT
// ==========================================

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {


card.animate(

    [
        {
            transform:
            "translateY(0px)"
        },
        {
            transform:
            "translateY(-10px)"
        },
        {
            transform:
            "translateY(0px)"
        }
    ],

    {
        duration:
        3000 + index * 300,
        iterations:
        Infinity
    }

);


});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {


if (window.scrollY > 50) {

    navbar.style.background =
    "rgba(0,0,0,0.85)";

    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.3)";

} else {

    navbar.style.background =
    "rgba(0,0,0,0.45)";

    navbar.style.boxShadow =
    "none";
}


});

// ==========================================
// ACHIEVEMENT CARD GLOW
// ==========================================

const achievementCards =
document.querySelectorAll(".achievement-card");

achievementCards.forEach(card => {


card.addEventListener("mouseenter", () => {

    card.style.boxShadow =
    "0 0 40px rgba(139,92,246,.45)";

});

card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "none";

});


});

// ==========================================
// CONTACT SECTION FADE
// ==========================================

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.classList.add("visible");

    }

});


},

{
threshold: 0.2
}

);

document
.querySelectorAll(
".contact-card,.project-card,.skill-card"
)
.forEach(el => {

```
observer.observe(el);
```

});

// ==========================================
// OPTIONAL RESUME DOWNLOAD
// ==========================================

const resumeButton =
document.querySelector(".primary-btn");

if (resumeButton) {


resumeButton.addEventListener("click", (e) => {

    e.preventDefault();

    window.open(
        "assets/resume.pdf",
        "_blank"
    );

});


}

// ==========================================
// CONSOLE SIGNATURE
// ==========================================

console.log(
"%cPortfolio by Sujani Mahadikar",
"color:#8B5CF6;font-size:18px;font-weight:bold;"
);

console.log(
"%cProduction Support Engineer | Full Stack Developer",
"color:#ffffff;font-size:12px;"
);
