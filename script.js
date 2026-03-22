// close sticker
document.addEventListener("DOMContentLoaded", () => {
  const sticker = document.querySelector(".sticker");

  if (sticker) {
    sticker.addEventListener("click", () => {
      sticker.style.display = "none";
    });
  }
});


// language toggle
  const toggleBtn = document.getElementById("lang-toggle");
  const translatable = document.querySelectorAll("[data-ko][data-en]");

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-en", lang === "en");

    translatable.forEach(el => {
      el.textContent = el.dataset[lang];
    });

    toggleBtn.textContent = lang === "ko" ? "EN" : "KO";
    localStorage.setItem("site-lang", lang);
  }

  const savedLang = localStorage.getItem("site-lang") || "ko";
  setLanguage(savedLang);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "ko";
    setLanguage(current === "ko" ? "en" : "ko");
  });


//multilingual

$(document).ready(function(e){
    $(".content").multilingual([
      "en", "kr"
    ]);
  });





// random bg color
document.addEventListener("DOMContentLoaded", () => {
  const themes = [
    { bg: "#f1f3c9", text: "#441845" },
    { bg: "#ffff00", text: "#e32105" },
    { bg: "#dfffec", text: "#0000ff" },
    { bg: "#d6b36f", text: "#e32105" }
  ];

  const selected = themes[Math.floor(Math.random() * themes.length)];

  const exkuma = document.querySelector(".exkuma");
  const toggle = document.querySelector(".lang-toggle-right");
  const nav = document.querySelector(".exkuma-nav");
  const sticker = document.querySelector(".sticker");

  [exkuma, toggle, nav, sticker].forEach(el => {
    if (el) {
      el.style.backgroundColor = selected.bg;
      el.style.color = selected.text;
    }
  });
});

// collection hover for img
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#kuma-collections li");

  const preview = document.createElement("div");
  preview.className = "hover-preview";

  const previewImg = document.createElement("img");
  preview.appendChild(previewImg);

  document.body.appendChild(preview);

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const imageSrc = item.getAttribute("data-image");
      if (!imageSrc) return;

      previewImg.src = imageSrc;
      preview.style.display = "block";
    });

    item.addEventListener("mousemove", (e) => {
      preview.style.left = e.clientX + 20 + "px";
      preview.style.top = e.clientY + 20 + "px";
    });

    item.addEventListener("mouseleave", () => {
      preview.style.display = "none";
    });
  });
});

