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

  const demoAdsExpireAt = new Date("2026-04-21T00:00:00-05:00").getTime();
  if (Date.now() >= demoAdsExpireAt || document.body.dataset.demoAdsLoaded === "true") {
    return;
  }
  document.body.dataset.demoAdsLoaded = "true";

  const createDemoAd = (variant, title) => {
    const ad = document.createElement("aside");
    ad.className = "demo-ad demo-ad--" + variant;
    ad.setAttribute("aria-label", "Anuncio automatico simulado");
    ad.innerHTML = `
      <span class="demo-ad__label">Anuncio automatico simulado</span>
      <strong>` + title + `</strong>
      <p>Espacio de ejemplo inspirado en ubicaciones automaticas. Se ocultara el 21 de abril de 2026.</p>
    `;
    return ad;
  };

  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    siteHeader.insertAdjacentElement("afterend", createDemoAd("top", "Tecnologia util para tomar mejores decisiones"));
  }

  const articleContent = document.querySelector(".entry-content");
  const paragraphs = articleContent ? articleContent.querySelectorAll("p") : [];
  if (paragraphs.length >= 4) {
    paragraphs[3].insertAdjacentElement("afterend", createDemoAd("inline", "Herramientas digitales para lectores curiosos"));
  }

  const contentWrap = document.querySelector(".content-wrap");
  if (contentWrap) {
    contentWrap.insertAdjacentElement("beforeend", createDemoAd("bottom", "Sigue explorando guias y comparativas"));
  }
});