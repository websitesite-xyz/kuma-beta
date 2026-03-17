// Close Sticker
document.addEventListener("DOMContentLoaded", () => {
  const sticker = document.querySelector(".sticker");

  if (sticker) {
    sticker.addEventListener("click", () => {
      sticker.style.display = "none";
    });
  }
});



// Language Toggle
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
      "en", "num"
    ]);
  });
