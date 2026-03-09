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