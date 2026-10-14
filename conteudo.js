// =====================================================================
//  CONTEÚDO DO SITE
//  Edite só este arquivo para trocar textos, datas e fotos.
//  Tudo que está entre [colchetes] é texto provisório para substituir.
//  Fotos: coloque os arquivos na pasta "fotos/" com os nomes abaixo
//  (ou troque os nomes aqui). Enquanto a foto não existir, aparece
//  um quadro provisório no lugar.
// =====================================================================

window.SITE = {
  ele: "Kauann",
  ela: "Sophia",

  // Data e hora em que vocês começaram a namorar (ano-mês-diaThora:minuto)
  inicio: "2025-10-14T00:00",

  // Tela de abertura (o "envelope" que ela toca para abrir)
  abertura: {
    para: "Para Sophia",
    dica: "toque para abrir",
  },

  // Frase grande logo no topo
  frase: "[Um ano atrás eu não sabia, mas a minha vida ia ganhar o seu nome.]",

  // Linha do tempo: adicione ou remova itens à vontade
  historia: [
    {
      quando: "[Mês de 2025]",
      titulo: "[Quando a gente se conheceu]",
      texto: "[Conte aqui como foi o primeiro encontro, onde vocês estavam, o que você pensou dela.]",
      foto: "fotos/historia-1.jpg",
    },
    {
      quando: "14 de outubro de 2025",
      titulo: "[O pedido]",
      texto: "[Como foi o dia em que vocês começaram a namorar.]",
      foto: "fotos/historia-2.jpg",
    },
    {
      quando: "[Mês de 2026]",
      titulo: "[Uma viagem ou um dia inesquecível]",
      texto: "[Um momento que vocês sempre lembram juntos.]",
      foto: "fotos/historia-3.jpg",
    },
    {
      quando: "Hoje",
      titulo: "1 ano",
      texto: "[E é só o começo.]",
      foto: "fotos/historia-4.jpg",
    },
  ],

  // Galeria de fotos (legenda é opcional)
  galeria: [
    { foto: "fotos/galeria-1.jpg", legenda: "[legenda]" },
    { foto: "fotos/galeria-2.jpg", legenda: "[legenda]" },
    { foto: "fotos/galeria-3.jpg", legenda: "[legenda]" },
    { foto: "fotos/galeria-4.jpg", legenda: "[legenda]" },
    { foto: "fotos/galeria-5.jpg", legenda: "[legenda]" },
    { foto: "fotos/galeria-6.jpg", legenda: "[legenda]" },
  ],

  // Motivos (ela toca no cartão para revelar)
  motivos: [
    "[O jeito que você ri das minhas piadas ruins]",
    "[Motivo 2]",
    "[Motivo 3]",
    "[Motivo 4]",
    "[Motivo 5]",
    "[Motivo 6]",
  ],

  // Carta final
  carta: {
    saudacao: "[Meu amor,]",
    paragrafos: [
      "[Escreva aqui a sua carta. Pode ser longa, pode ser curta. Cada item desta lista vira um parágrafo.]",
      "[Segundo parágrafo.]",
      "[Terceiro parágrafo.]",
    ],
    assinatura: "[Com amor, Kauann]",
  },

  // Música de vocês (opcional). Cole o link de uma música do Spotify
  // (ex.: https://open.spotify.com/track/...) ou deixe vazio "".
  musica: "",

  rodape: "Feliz 1 ano, Sophia.",
};
