// ACTIVE NAVBAR
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// FORM VALIDATION
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "none";
      }
    });

    if (valid) {
      alert("Pesan berhasil dikirim 🚀");
      form.reset();
    } else {
      alert("Harap isi semua field!");
    }
  });
}

// SCROLL ANIMATION
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

