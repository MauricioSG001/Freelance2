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

  const createDemoAd = (variant, title, note = "Espacio de ejemplo inspirado en ubicaciones automaticas.") => {
    const ad = document.createElement("aside");
    ad.className = "demo-ad demo-ad--" + variant;
    ad.setAttribute("aria-label", "Anuncio automatico simulado");
    ad.innerHTML = `
      <span class="demo-ad__label">Anuncio automatico simulado</span>
      <strong>` + title + `</strong>
      <p>` + note + ` Se ocultara el 21 de abril de 2026.</p>
    `;
    return ad;
  };

  const insertOnce = (target, position, ad) => {
    if (!target || target.dataset.demoAdPlaced === "true") {
      return;
    }
    target.dataset.demoAdPlaced = "true";
    target.insertAdjacentElement(position, ad);
  };

  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    siteHeader.insertAdjacentElement("afterend", createDemoAd("top", "Tecnologia util para tomar mejores decisiones", "Banner superior tipo display para simular anuncios automaticos en todas las paginas."));
  }

  document.querySelectorAll(".post-grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".card");
    const anchor = cards.length > 1 ? cards[1] : cards[0];
    if (anchor) {
      anchor.insertAdjacentElement("afterend", createDemoAd("feed", "Apps, IA y tecnologia para trabajar mejor", "Anuncio in-feed colocado entre tarjetas de contenido."));
    }
  });

  const featuredStrip = document.querySelector(".featured-strip");
  if (featuredStrip) {
    featuredStrip.insertAdjacentElement("afterend", createDemoAd("section", "Recomendacion destacada para lectores de tecnologia", "Bloque entre secciones de portada para simular monetizacion editorial."));
  }

  const sidebar = document.querySelector(".sidebar-area");
  const firstWidget = sidebar ? sidebar.querySelector(".widget") : null;
  if (firstWidget) {
    firstWidget.insertAdjacentElement("afterend", createDemoAd("sidebar", "Espacio recomendado", "Formato lateral tipo rectangulo para escritorio."));
  }

  const articleContent = document.querySelector(".entry-content");
  const paragraphs = articleContent ? articleContent.querySelectorAll("p") : [];
  if (paragraphs.length >= 4) {
    paragraphs[3].insertAdjacentElement("afterend", createDemoAd("inline", "Herramientas digitales para lectores curiosos", "Anuncio dentro del articulo despues de varios parrafos."));
  }

  const pageBox = document.querySelector(".page-box");
  const pageParagraphs = pageBox ? pageBox.querySelectorAll("p") : [];
  if (pageParagraphs.length >= 2) {
    pageParagraphs[1].insertAdjacentElement("afterend", createDemoAd("inline", "Servicios digitales para proyectos modernos", "Anuncio dentro de paginas informativas."));
  }

  const contentWrap = document.querySelector(".content-wrap");
  if (contentWrap) {
    contentWrap.insertAdjacentElement("beforeend", createDemoAd("bottom", "Sigue explorando guias y comparativas", "Banner inferior antes del cierre del contenido principal."));
  }

  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.insertAdjacentElement("beforebegin", createDemoAd("wide", "Contenido patrocinado de muestra", "Simulacion de anuncio ancho antes del footer."));
  }

  document.body.appendChild(createDemoAd("mobile-anchor", "Anuncio movil simulado", "Barra fija inferior visible en pantallas pequenas."));
});