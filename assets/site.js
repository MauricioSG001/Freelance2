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

  const productAds = [
    {
      name: "Notion",
      badge: "Productividad",
      title: "Organiza documentos, proyectos y conocimiento en Notion",
      body: "Workspace real para crear wikis, bases de datos, notas y flujos de trabajo colaborativos.",
      image: "/assets/ads/notion-product.svg",
      url: "https://www.notion.com/product/notion",
      cta: "Ver Notion"
    },
    {
      name: "Canva Pro",
      badge: "Diseno",
      title: "Crea piezas visuales rapidas con Canva Pro",
      body: "Herramientas de diseno, plantillas, recursos premium y funciones de IA para contenido profesional.",
      image: "/assets/ads/canva-product.svg",
      url: "https://www.canva.com/pro/",
      cta: "Explorar Canva Pro"
    },
    {
      name: "Grammarly",
      badge: "Escritura",
      title: "Mejora tus textos con Grammarly",
      body: "Asistente de comunicacion con sugerencias de claridad, tono y escritura para web, escritorio y movil.",
      image: "/assets/ads/grammarly-product.svg",
      url: "https://www.grammarly.com/",
      cta: "Probar Grammarly"
    },
    {
      name: "NordVPN",
      badge: "Seguridad",
      title: "Protege tu conexion con NordVPN",
      body: "VPN real con funciones de privacidad, proteccion frente a amenazas y seguridad para varios dispositivos.",
      image: "/assets/ads/nordvpn-product.svg",
      url: "https://nordvpn.com/features/",
      cta: "Ver NordVPN"
    },
    {
      name: "Kit digital",
      badge: "Gif demo",
      title: "Herramientas reales para trabajar mejor online",
      body: "Una seleccion visual de productividad, diseno, escritura y seguridad para lectores de ByteNoticias.",
      image: "/assets/ads/product-motion.svg",
      url: "https://www.notion.com/product/notion",
      cta: "Ver herramientas"
    }
  ];

  const pickProduct = (offset) => productAds[offset % productAds.length];

  const createDemoAd = (variant, product) => {
    const ad = document.createElement("aside");
    ad.className = "demo-ad product-ad demo-ad--" + variant + " product-ad--" + variant;
    ad.setAttribute("aria-label", "Promocion simulada de " + product.name);
    ad.innerHTML = [
      '<a class="product-ad__media" href="' + product.url + '" target="_blank" rel="nofollow sponsored noopener">',
      '<img src="' + product.image + '" alt="Promocion visual de ' + product.name + '" loading="lazy">',
      '</a>',
      '<div class="product-ad__content">',
      '<span class="demo-ad__label">' + product.badge + ' - promocion demo</span>',
      '<strong>' + product.title + '</strong>',
      '<p>' + product.body + ' Esta simulacion expira el 21 de abril de 2026.</p>',
      '<a class="product-ad__cta" href="' + product.url + '" target="_blank" rel="nofollow sponsored noopener">' + product.cta + '</a>',
      '</div>'
    ].join("");
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
    siteHeader.insertAdjacentElement("afterend", createDemoAd("top", pickProduct(0)));
  }

  document.querySelectorAll(".post-grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".card");
    const anchor = cards.length > 1 ? cards[1] : cards[0];
    if (anchor) {
      anchor.insertAdjacentElement("afterend", createDemoAd("feed", pickProduct(1)));
    }
  });

  const featuredStrip = document.querySelector(".featured-strip");
  if (featuredStrip) {
    featuredStrip.insertAdjacentElement("afterend", createDemoAd("section", pickProduct(4)));
  }

  const sidebar = document.querySelector(".sidebar-area");
  const firstWidget = sidebar ? sidebar.querySelector(".widget") : null;
  if (firstWidget) {
    firstWidget.insertAdjacentElement("afterend", createDemoAd("sidebar", pickProduct(3)));
  }

  const articleContent = document.querySelector(".entry-content");
  const paragraphs = articleContent ? articleContent.querySelectorAll("p") : [];
  if (paragraphs.length >= 4) {
    paragraphs[3].insertAdjacentElement("afterend", createDemoAd("inline", pickProduct(2)));
  }

  const pageBox = document.querySelector(".page-box");
  const pageParagraphs = pageBox ? pageBox.querySelectorAll("p") : [];
  if (pageParagraphs.length >= 2) {
    pageParagraphs[1].insertAdjacentElement("afterend", createDemoAd("inline", pickProduct(1)));
  }

  const contentWrap = document.querySelector(".content-wrap");
  if (contentWrap) {
    contentWrap.insertAdjacentElement("beforeend", createDemoAd("bottom", pickProduct(0)));
  }

  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.insertAdjacentElement("beforebegin", createDemoAd("wide", pickProduct(4)));
  }

  document.body.appendChild(createDemoAd("mobile-anchor", pickProduct(3)));
});