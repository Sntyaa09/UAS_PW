   
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                // Tambahkan animasi saat halaman dimuat ke navbar
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    nav.style.opacity = '0';
    nav.style.transform = 'translateY(-30px)';
    setTimeout(() => {
        nav.style.transition = 'all 1s ease';
        nav.style.opacity = '1';
        nav.style.transform = 'translateY(0)';
    }, 200);
});

            });
        });
        
        function showSkillInfo(skill) {
    let message = "";
    switch (skill) {
        case "js":
            message = "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis.";
            break;
        case "html":
            message = "HTML (HyperText Markup Language) digunakan untuk membuat struktur halaman web.";
            break;
        case "css":
            message = "CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan dan desain visual website.";
            break;
        default:
            message = "Skill ini belum memiliki deskripsi.";
    }
    alert(message);
}
// Fungsi untuk animasi muncul saat discroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // agar animasi berjalan juga saat load
// Scroll Progress Bar
window.onscroll = function () {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";
};
// Cursor Glow
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
// Typing Effect
const texts = ["Programmer", "Web Developer",];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typingText').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500); // jeda sebelum mengetik ulang
    } else {
        setTimeout(type, 100); // kecepatan ketik
    }
})();
// Tombol back to top
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


