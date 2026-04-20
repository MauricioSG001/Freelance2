document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-navigation");
  const toggle = document.querySelector(".menu-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll("[data-static-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Conecta este formulario a tu proveedor de email o a un servicio como Formspree cuando publiques el sitio.");
    });
  });

  const now = Date.now();
  document.querySelectorAll("[data-demo-promo]").forEach((ad) => {
    const expiresAt = Date.parse(ad.dataset.expireAt || "");
    if (Number.isFinite(expiresAt) && now >= expiresAt) {
      ad.remove();
    }
  });
});