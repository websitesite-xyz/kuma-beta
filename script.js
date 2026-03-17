document.addEventListener("DOMContentLoaded", () => {
  const sticker = document.querySelector(".sticker");

  if (sticker) {
    sticker.addEventListener("click", () => {
      sticker.style.display = "none";
    });
  }
});


function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {pageLanguage: 'ko', includedLanguages: 'en'},
    'google_translate_element'
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("translate-en");

  btn.addEventListener("click", () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }
  });
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
