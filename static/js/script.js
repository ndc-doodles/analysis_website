

(function () {
  function init() {
    const menuToggle = document.getElementById("menuToggle");
    const menuPanel = document.getElementById("menuPanel");
    const navbar = document.getElementById("navbar");
    const body = document.body;

    const langToggle = document.getElementById("lang-toggle");
    const mobileLangToggle = document.getElementById("mobile-lang-toggle");
    const langLabel = document.getElementById("lang-label");
    const mobileLangLabel = document.getElementById("mobile-lang-label");

    // If navbar not found, bail early and log (helps detect ID/name mismatch)
    if (!navbar) {
      console.warn("Navbar element with id 'navbar' not found.");
      return;
    }

    // Ensure initial state
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("backdrop-blur-md", "bg-[#03024E]/20", "shadow-md");

    // === When menu opens/closes ===
    if (menuToggle) {
      menuToggle.addEventListener("change", () => {
        const isOpen = menuToggle.checked;
        if (menuPanel) menuPanel.classList.toggle("open", isOpen);
        body.classList.toggle("lang-white", isOpen);
      });
    }

    // === Menu link click behaviour ===
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".menu-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        if (menuToggle) {
          menuToggle.checked = false;
        }
        if (menuPanel) menuPanel.classList.remove("open");
        body.classList.remove("lang-white");
      });
    });

    // === Navbar transparency based on scroll ===
    function onScroll() {
      // threshold 50 px (tweak if you want it sooner/later)
      if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add(
          "backdrop-blur-md",
          "bg-[#03024E]/20",
          "shadow-md",
          "transition-all",
          "duration-500"
        );
      } else {
        navbar.classList.remove(
          "backdrop-blur-md",
          "bg-[#03024E]/20",
          "shadow-md"
        );
        navbar.classList.add("bg-transparent");
      }
    }
    // run once to set initial state
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // === Language toggle logic ===
    function updateLanguageUI(isEnglish) {
      if (langLabel) langLabel.textContent = isEnglish ? "ENG" : "TAMIL";
      if (mobileLangLabel) mobileLangLabel.textContent = isEnglish ? "ENG" : "TAMIL";
      if (langToggle) langToggle.checked = isEnglish;
      if (mobileLangToggle) mobileLangToggle.checked = isEnglish;
    }

    if (langToggle) {
      langToggle.addEventListener("change", () => updateLanguageUI(langToggle.checked));
    }
    if (mobileLangToggle) {
      mobileLangToggle.addEventListener("change", () => updateLanguageUI(mobileLangToggle.checked));
    }
    updateLanguageUI(false);

    // === Close sidebar when clicking outside ===
    document.addEventListener("click", (event) => {
      const target = event.target;
      const isClickInside =
        (menuPanel && menuPanel.contains(target)) ||
        (menuToggle && menuToggle.contains(target));
      if (!isClickInside && menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
        if (menuPanel) menuPanel.classList.remove("open");
        body.classList.remove("lang-white");
      }
    });
  }

  // If DOMContentLoaded already fired, init immediately; otherwise wait
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();













const data = {
  AC: {
    2021: {
      alliances: [
        { name: "NDA", totalSeats: 234, won: 84, voteShare: 43, color: "#2563eb" },
        { name: "SPA", totalSeats: 234, won: 150, voteShare: 47, color: "#16a34a" },
      ],
      parties: [
        { party: "All India Anna Dravida Munnetra Kazhagam", alliance: "NDA", contested: 191, won: 66, voteShare: 33.5, contestedVoteShare: 40.8 },
        { party: "Pattali Makkal Katchi", alliance: "NDA", contested: 23, won: 5, voteShare: 3.8, contestedVoteShare: 37.9 },
        { party: "Bharatiya Janta Party", alliance: "NDA", contested: 20, won: 4, voteShare: 2.6, contestedVoteShare: 34.5 },
        { party: "Dravida Munetra Kazhagam", alliance: "SPA", contested: 188, won: 133, voteShare: 38, contestedVoteShare: 46.8 },
        { party: "Indian National Congress", alliance: "SPA", contested: 25, won: 18, voteShare: 4.3, contestedVoteShare: 41.6 },
        { party: "Viduthalai Chiruthaigal Katchi", alliance: "SPA", contested: 6, won: 4, voteShare: 1, contestedVoteShare: 42.7 },
        { party: "Communist Party Of India", alliance: "SPA", contested: 6, won: 2, voteShare: 1.1, contestedVoteShare: 43.7 },
        { party: "Communist Party Of India (Marxist)", alliance: "SPA", contested: 6, won: 2, voteShare: 0.9, contestedVoteShare: 35.5 },
        { party: "Indian Union Muslim League", alliance: "SPA", contested: 3, won: 0, voteShare: 0.5, contestedVoteShare: 38.7 },
      ]
    },

    2016: {
      alliances: [
        { name: "AIADMK ALLIANCE", color: "#15803d" },
        { name: "DMK ALLIANCE", color: "#dc2626" },
        { name: "PEOPLES WELFARE FRONT ALLIANCE", color: "#0891b2" },
        { name: "NATIONAL DEMOCRATIC ALLIANCE", color: "#f59e0b" },
      ],
      parties: [
        { party: "All India Anna Dravida Munnetra Kazhagam", alliance: "AIADMK ALLIANCE", contested: 227, won: 134, voteShare: 40.9, contestedVoteShare: 44.0 },
        { party: "Dravida Munnetra Kazhagam", alliance: "DMK ALLIANCE", contested: 176, won: 89, voteShare: 31.6, contestedVoteShare: 42.3 },
        { party: "Indian National Congress", alliance: "DMK ALLIANCE", contested: 41, won: 8, voteShare: 6.5, contestedVoteShare: 38.1 },
        { party: "Marumalarchi Dravida Munnetra Kazhagam", alliance: "PEOPLES WELFARE FRONT ALLIANCE", contested: 104, won: 0, voteShare: 2.4, contestedVoteShare: 21.7 },
        { party: "Desiya Murpokku Dravida Kazhagam", alliance: "PEOPLES WELFARE FRONT ALLIANCE", contested: 104, won: 0, voteShare: 2.4, contestedVoteShare: 21.3 },
        { party: "Communist Party of India", alliance: "PEOPLES WELFARE FRONT ALLIANCE", contested: 25, won: 0, voteShare: 0.6, contestedVoteShare: 18.1 },
        { party: "Communist Party of India (Marxist)", alliance: "PEOPLES WELFARE FRONT ALLIANCE", contested: 25, won: 0, voteShare: 0.6, contestedVoteShare: 18.7 },
        { party: "Bharatiya Janata Party", alliance: "NATIONAL DEMOCRATIC ALLIANCE", contested: 188, won: 0, voteShare: 2.8, contestedVoteShare: 14.8 },
      ]
    }
  },

  PC: {
    2024: {
      alliances: [
        { name: "NDA", color: "#1d4ed8" },
        { name: "INDIA", color: "#15803d" },
      ],
      parties: [
        { party: "Bharatiya Janta Party", alliance: "NDA", contested: 23, won: 0, voteShare: 11.4, contestedVoteShare: 19.8 },
        { party: "Dravida Munnetra Kazhagam", alliance: "INDIA", contested: 22, won: 22, voteShare: 27.2, contestedVoteShare: 47.8 },
        { party: "Indian National Congress", alliance: "INDIA", contested: 9, won: 9, voteShare: 10.8, contestedVoteShare: 46.8 },
      ]
    },
    2019: {
      alliances: [
        { name: "NDA", color: "#1d4ed8" },
        { name: "UPA", color: "#dc2626" },
      ],
      parties: [
        { party: "All India Anna Dravida Munnetra Kazhagam", alliance: "NDA", contested: 21, won: 1, voteShare: 18.7, contestedVoteShare: 33.6 },
        { party: "Dravida Munetra Kazhagam", alliance: "UPA", contested: 23, won: 23, voteShare: 33.2, contestedVoteShare: 55.1 },
        { party: "Indian National Congress", alliance: "UPA", contested: 9, won: 8, voteShare: 12.9, contestedVoteShare: 53.4 },
      ]
    }
  }
};

// === DOM Elements ===
const yearSelect = document.getElementById("year-select");
const tableBody = document.getElementById("party-table");
const ctx = document.getElementById("voteChart");
const acBtn = document.getElementById("ac-btn");
const pcBtn = document.getElementById("pc-btn");

let currentType = "AC";
let currentYear = "2021";
let chartInstance;

// === Helper: Build Chart Data ===
// === Helper: Build Alliance Data (Seats Won + Color) ===
function getAllianceStats(type, year) {
  const d = data[type]?.[year];
  if (!d) return [];
  return d.alliances.map(a => {
    const totalSeats = d.parties
      .filter(p => p.alliance === a.name)
      .reduce((sum, p) => sum + (p.won || 0), 0);
    return { name: a.name, color: a.color, won: totalSeats };
  });
}


// === Render Table ===
function renderTable() {
  const current = data[currentType]?.[currentYear];
  if (!current) {
    tableBody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-gray-500">No data available</td></tr>`;
    return;
  }

  const { alliances, parties } = current;
  let html = "";

  alliances.forEach(a => {
    const group = parties.filter(p => p.alliance === a.name);

    group.forEach((p, i) => {
      html += `
      <tr class="hover:bg-gray-50 transition">
        ${i === 0
          ? `<td rowspan="${group.length}" class="border text-center font-semibold text-white" style="background:${a.color};">${a.name}</td>`
          : ""
        }
        <td class="py-3 px-4 border text-gray-800">${p.party}</td>
        <td class="py-3 px-4 border text-center">${p.contested ?? "—"}</td>
        <td class="py-3 px-4 border text-center">${p.won ?? "—"}</td>
        <td class="py-3 px-4 border text-center">${p.voteShare ? p.voteShare + "%" : "—"}</td>
        <td class="py-3 px-4 border text-center">${p.contestedVoteShare ? p.contestedVoteShare + "%" : "—"}</td>
      </tr>`;
    });
  });

  tableBody.innerHTML = html;
}



// === Render Chart ===
function renderChart() {
  const allianceData = getAllianceStats(currentType, currentYear);
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: allianceData.map(a => a.name),
      datasets: [
        {
          label: `${currentYear} Seats Won`,
          data: allianceData.map(a => a.won),
          backgroundColor: allianceData.map(a => a.color + "cc"),
          borderColor: allianceData.map(a => a.color),
          borderWidth: 1.5,
          borderRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: `Alliance-wise Seats Won — ${currentType === "AC" ? "Assembly" : "Parliament"} ${currentYear}`,
          font: { size: 16, weight: "bold" }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.parsed.y} seats`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Seats Won" },
          ticks: {
            precision: 0,
            stepSize: 10
          }
        },
        x: {
          ticks: { font: { weight: "600" } }
        }
      },
      animation: {
        duration: 800,
        easing: "easeOutQuart"
      }
    }
  });
}
// === Year Options ===
function updateYearOptions(type) {
  yearSelect.innerHTML = "";
  if (type === "AC") {
    yearSelect.innerHTML = `
      <option value="2021">2021</option>
      <option value="2016">2016</option>
    `;
    currentYear = "2021";
  } else {
    yearSelect.innerHTML = `
      <option value="2024">2024</option>
      <option value="2019">2019</option>
    `;
    currentYear = "2024";
  }
}

// === Button Styling ===
function setActiveButton(active, inactive) {
  active.classList.add("bg-[#03024E]", "text-white", "shadow-md");
  active.classList.remove("bg-gray-200", "text-gray-700");
  inactive.classList.add("bg-gray-200", "text-gray-700");
  inactive.classList.remove("bg-[#03024E]", "text-white", "shadow-md");
}

// === Events ===
acBtn.addEventListener("click", () => {
  currentType = "AC";
  setActiveButton(acBtn, pcBtn);
  updateYearOptions("AC");
  renderAll();
});

pcBtn.addEventListener("click", () => {
  currentType = "PC";
  setActiveButton(pcBtn, acBtn);
  updateYearOptions("PC");
  renderAll();
});

yearSelect.addEventListener("change", e => {
  currentYear = e.target.value;
  renderAll();
});

// === Render Everything ===
function renderAll() {
  renderTable();
  renderChart();
}

// === Initialize ===
setActiveButton(acBtn, pcBtn);
updateYearOptions("AC");
renderAll();




document.addEventListener("DOMContentLoaded", () => {
  // === AOS Init ===
  AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });

  // === Animate Progress Bars on Scroll ===
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        bar.style.transition = "width 1.2s ease-out";
        progressObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });
  progressBars.forEach(bar => progressObserver.observe(bar));

  // === Chart: Trigger Animation When Visible ===
  const chartCanvas = document.getElementById("pollChart");
  const chartData = {
    labels: ["NDA", "SPA", "Others"],
    datasets: [{
      data: [60, 35, 5],
      backgroundColor: ["#16a34a", "#2563eb", "#f59e0b"],
      borderWidth: 2,
      borderColor: "#ffffff",
      hoverOffset: 10
    }]
  };

  let chartCreated = false; // prevent multiple re-renders

  const createChart = () => {
    const ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#374151", font: { size: 13 } }
          },
          tooltip: {
            callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed}%` }
          }
        },
        cutout: "65%",
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1800,
          easing: "easeOutElastic"
        }
      }
    });
  };

  const chartObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !chartCreated) {
        chartCreated = true;
        createChart();
        chartObserver.unobserve(chartCanvas);
      }
    });
  }, { threshold: 0.5 });

  chartObserver.observe(chartCanvas);
});



