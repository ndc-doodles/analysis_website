document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menuPanel = document.getElementById("menuPanel");
  const navbar = document.getElementById("navbar");
  const body = document.body;

  const langToggle = document.getElementById("lang-toggle");
  const mobileLangToggle = document.getElementById("mobile-lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const mobileLangLabel = document.getElementById("mobile-lang-label");

  // === When menu opens/closes ===
  menuToggle.addEventListener("change", () => {
    const isOpen = menuToggle.checked;
    menuPanel.classList.toggle("open", isOpen);
    body.classList.toggle("lang-white", isOpen);
  });

  // === Menu link click behaviour ===
  document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".menu-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      menuToggle.checked = false;
      menuPanel.classList.remove("open");
      body.classList.remove("lang-white");
    });
  });

  // === Navbar scroll effect (blur + bg-[#03024E]) ===
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add(
        "backdrop-blur-md",
        "bg-[#03024E]/20",
        "shadow-md",
        "transition-all",
        "duration-500"
      );
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove(
        "backdrop-blur-md",
        "bg-[#03024E]/70",
        "shadow-md"
      );
      navbar.classList.add("bg-transparent");
    }
  });

  // === Language toggle logic ===
  function updateLanguageUI(isEnglish) {
    langLabel.textContent = isEnglish ? "ENG" : "TAMIL";
    mobileLangLabel.textContent = isEnglish ? "ENG" : "TAMIL";
    langToggle.checked = isEnglish;
    mobileLangToggle.checked = isEnglish;
  }

  langToggle.addEventListener("change", () => updateLanguageUI(langToggle.checked));
  mobileLangToggle.addEventListener("change", () => updateLanguageUI(mobileLangToggle.checked));
  updateLanguageUI(false);

  // === Close sidebar when clicking outside ===
  document.addEventListener("click", (event) => {
    const isClickInside = menuPanel.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside && menuToggle.checked) {
      menuToggle.checked = false;
      menuPanel.classList.remove("open");
      body.classList.remove("lang-white");
    }
  });
});
