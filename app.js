(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, texto) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (texto != null) n.textContent = texto;
    return n;
  };
  const pegar = (caminho) => caminho.split(".").reduce((o, k) => (o ? o[k] : undefined), S);

  // Campos de texto simples
  document.querySelectorAll("[data-campo]").forEach((n) => {
    const v = pegar(n.dataset.campo);
    if (v) n.textContent = v;
  });
  document.title = `${S.ele} & ${S.ela} · 1 ano`;

  // Foto com quadro provisório quando o arquivo ainda não existe
  function foto(src, alt) {
    const box = el("div", "foto");
    box.dataset.arquivo = src;
    const img = new Image();
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => box.classList.add("foto--vazia");
    img.onload = () => box.style.setProperty("--proporcao", `${img.naturalWidth} / ${img.naturalHeight}`);
    img.src = src;
    box.append(img);
    return box;
  }

  // Linha do tempo
  const linha = $("#linha");
  S.historia.forEach((m) => {
    const li = el("li", "marco revelar");
    li.append(el("p", "marco__quando", m.quando), el("h3", "marco__titulo", m.titulo), el("p", "marco__texto", m.texto));
    if (m.destaque) li.classList.add("marco--destaque");
    const lista = m.fotos || (m.foto ? [m.foto] : []);
    if (lista.length === 1) li.append(foto(lista[0], m.titulo));
    if (lista.length > 1) {
      const mosaico = el("div", "mosaico");
      lista.forEach((src) => mosaico.append(foto(src, m.titulo)));
      li.append(mosaico);
    }
    linha.append(li);
  });

  // Galeria
  const grade = $("#grade-fotos");
  const dialogo = $("#ampliada");
  S.galeria.forEach((g, i) => {
    const b = el("button", "polaroide revelar");
    b.type = "button";
    b.style.setProperty("--giro", `${[-1.6, 1.2, -0.6, 1.8, -1.1, 0.7][i % 6]}deg`);
    const fig = el("figure");
    fig.style.margin = "0";
    const f = foto(g.foto, g.legenda);
    fig.append(f, el("figcaption", null, g.legenda || ""));
    b.append(fig);
    b.addEventListener("click", () => {
      if (f.classList.contains("foto--vazia")) return;
      dialogo.querySelector("img").src = g.foto;
      dialogo.querySelector("img").alt = g.legenda || "";
      dialogo.querySelector("figcaption").textContent = g.legenda || "";
      dialogo.showModal();
    });
    grade.append(b);
  });
  dialogo.addEventListener("click", (e) => {
    if (e.target === dialogo || e.target.closest(".ampliada__fechar")) dialogo.close();
  });

  // Motivos
  const lista = $("#lista-motivos");
  S.motivos.forEach((txt, i) => {
    const li = el("li", "cartao revelar");
    const b = el("button");
    b.type = "button";
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-label", `Motivo ${i + 1}`);
    const frente = el("span", "cartao__lado cartao__frente");
    frente.append(el("span", null, String(i + 1).padStart(2, "0")), el("small", null, "toque"));
    const verso = el("span", "cartao__lado cartao__verso", txt);
    b.append(frente, verso);
    b.addEventListener("click", () => {
      const aberto = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!aberto));
    });
    li.append(b);
    lista.append(li);
  });

  // Música (Spotify)
  const m = (S.musica || "").match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist)\/([A-Za-z0-9]+)/);
  if (m) {
    const iframe = el("iframe");
    iframe.src = `https://open.spotify.com/embed/${m[1]}/${m[2]}`;
    iframe.height = m[1] === "track" ? "152" : "352";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.title = "Nossa música";
    $("#player").append(iframe);
    $("#musica").hidden = false;
    $("#num-carta").textContent = "V.";
  }

  // Carta
  const carta = $("#carta-texto");
  S.carta.paragrafos.forEach((p) => carta.append(el("p", null, p)));

  // Contador
  const inicio = new Date(S.inicio);
  const fmt = (n) => n.toLocaleString("pt-BR");
  function contar() {
    let s = Math.max(0, Math.floor((Date.now() - inicio) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const h = Math.floor(s / 3600); s %= 3600;
    const mi = Math.floor(s / 60); s %= 60;
    $("#c-dias").textContent = fmt(d);
    $("#c-horas").textContent = h;
    $("#c-min").textContent = mi;
    $("#c-seg").textContent = s;
  }
  contar();
  setInterval(contar, 1000);

  // Revelar ao rolar
  const obs = new IntersectionObserver((itens) => {
    itens.forEach((it) => {
      if (it.isIntersecting) { it.target.classList.add("visivel"); obs.unobserve(it.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".revelar").forEach((n) => obs.observe(n));

  // Corações
  const svgCoracao = '<svg viewBox="0 0 32 32"><path d="M16 27s-10-6-10-13.6A5.4 5.4 0 0 1 16 10.4a5.4 5.4 0 0 1 10 3C26 21 16 27 16 27z"/></svg>';
  const svgFlor = '<svg viewBox="0 0 32 32"><g class="petalas">' +
    [0, 72, 144, 216, 288].map((g) => `<ellipse cx="16" cy="8.5" rx="5" ry="7.5" transform="rotate(${g} 16 16)"/>`).join("") +
    '</g><circle class="miolo" cx="16" cy="16" r="3.6"/></svg>';
  const sorteio = () => (Math.random() < 0.5 ? svgCoracao : svgFlor);
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Corações e flores caindo ao fundo
  function ambiente() {
    if (semMovimento) return;
    const camada = el("div", "ambiente");
    camada.setAttribute("aria-hidden", "true");
    const qtd = innerWidth < 600 ? 12 : 20;
    for (let i = 0; i < qtd; i++) {
      const f = el("span", `flutuante ${i % 2 ? "flutuante--flor" : "flutuante--coracao"}`);
      f.innerHTML = i % 2 ? svgFlor : svgCoracao;
      f.style.left = `${Math.random() * 100}%`;
      f.style.width = `${0.7 + Math.random() * 1.1}rem`;
      f.style.setProperty("--dur", `${14 + Math.random() * 16}s`);
      f.style.setProperty("--atraso", `${-Math.random() * 30}s`);
      f.style.setProperty("--balanco", `${(Math.random() - 0.5) * 120}px`);
      f.style.setProperty("--giro", `${(Math.random() - 0.5) * 540}deg`);
      f.style.opacity = (0.25 + Math.random() * 0.35).toFixed(2);
      camada.append(f);
    }
    document.body.prepend(camada);
  }
  function chuva(x, y, qtd) {
    if (semMovimento) return;
    for (let i = 0; i < qtd; i++) {
      const p = el("span", "particula");
      p.innerHTML = sorteio();
      p.style.left = `${x - 8}px`;
      p.style.top = `${y - 8}px`;
      p.style.setProperty("--dx", `${(Math.random() - 0.5) * 220}px`);
      p.style.setProperty("--dy", `${-120 - Math.random() * 260}px`);
      p.style.setProperty("--rot", `${(Math.random() - 0.5) * 90}deg`);
      p.style.width = `${0.6 + Math.random() * 0.9}rem`;
      p.style.animationDelay = `${Math.random() * 0.15}s`;
      document.body.append(p);
      p.addEventListener("animationend", () => p.remove());
    }
  }
  $("#coracao").addEventListener("click", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    chuva(r.left + r.width / 2, r.top + r.height / 2, 18);
  });

  // Abertura
  const abertura = $("#abertura");
  $("#abrir").addEventListener("click", (e) => {
    abertura.classList.add("abrindo");
    const r = e.currentTarget.getBoundingClientRect();
    setTimeout(() => chuva(r.left + r.width / 2, r.top + r.height / 2, 24), 350);
    setTimeout(() => {
      $("#conteudo").hidden = false;
      abertura.classList.add("saiu");
      ambiente();
      window.scrollTo(0, 0);
    }, semMovimento ? 0 : 900);
  }, { once: true });
})();
