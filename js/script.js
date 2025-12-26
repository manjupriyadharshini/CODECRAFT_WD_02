// Smooth scroll for navbar items
document.querySelectorAll(".nav-links li[data-target]").forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});


document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.boxShadow = "0 0 40px rgba(255,77,109,0.9)";
    setTimeout(() => {
      card.style.boxShadow = "";
    }, 300);
  });
});

document.querySelector(".primary-btn")?.addEventListener("click", () => {
  const decorSection = document.getElementById("category");
  if (decorSection) {
    decorSection.scrollIntoView({ behavior: "smooth" });
  }
});


let cartCount = 0;

function addToCart(btn) {
  cartCount++;

  // update cart count
  const cartEl = document.querySelector(".cart");
  if (cartEl) {
    cartEl.innerText = `Cart (${cartCount})`;
  }

  // button animation + text change
  const originalText = btn.innerText;
  btn.innerText = "Added ✓";
  btn.classList.add("added");

  setTimeout(() => {
    btn.innerText = originalText;
    btn.classList.remove("added");
  }, 900);
}


// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
