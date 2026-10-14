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

  // Data e hora em que vocês ficaram juntos (ano-mês-diaThora:minuto)
  inicio: "2025-10-20T00:00",

  // Tela de abertura (o "envelope" que ela toca para abrir)
  abertura: {
    para: "Para Sophia",
    dica: "toque para abrir",
  },

  // Frase grande logo no topo
  frase: "Você veio na minha vida para somar, e hoje eu não consigo me ver sem você nela.",

  // Linha do tempo: adicione ou remova itens à vontade.
  // "foto" aceita um arquivo; "fotos" aceita uma lista de arquivos.
  historia: [
    {
      quando: "Antes de você",
      titulo: "Um cara meio frio",
      texto: "Isolado, focado no trabalho, nos estudos e nas cobranças da vida adulta. Namorar nem passava pela minha cabeça.",
    },
    {
      quando: "17 de outubro",
      titulo: "Um “UAU” nos seus stories",
      texto: "Você me pegou desprevenido. Nunca pensei que você fosse cair no “UAU” que eu mandei kkkkk",
      foto: "fotos/historia-1.jpg",
    },
    {
      quando: "25 de outubro",
      titulo: "Nosso primeiro encontro",
      texto: "A gente saiu pela primeira vez, e dali em diante não parou mais.",
      foto: "fotos/historia-2.jpg",
    },
    {
      quando: "20 de fevereiro de 2026",
      titulo: "O concerto de violino",
      texto: "Foi muito melhor do que qualquer concerto, porque foi ali, com você de vestido branco, que eu te pedi em namoro.",
      fotos: ["fotos/historia-3.jpg", "fotos/galeria-05.jpg", "fotos/historia-4.jpg"],
      destaque: true,
    },
    {
      quando: "Guararema",
      titulo: "Nossa primeira viagem",
      texto: "Conhecemos Guararema juntos. A primeira de muitas cidades que ainda vamos visitar, lado a lado.",
      foto: "fotos/galeria-04.jpg",
    },
    {
      quando: "Ao longo do ano",
      titulo: "Aprendendo com você",
      texto: "Mais paciência, conquistas que eu jamais pensaria alcançar, e você acreditando em mim o tempo todo.",
      foto: "fotos/galeria-08.jpg",
    },
    {
      quando: "Hoje",
      titulo: "1 ano juntos",
      texto: "E que Deus nos mantenha unidos até que a morte nos separe.",
      foto: "fotos/galeria-02.jpg",
    },
  ],

  // Galeria de fotos (legenda é opcional, pode deixar "")
  galeria: [
    { foto: "fotos/galeria-01.jpg", legenda: "" },
    { foto: "fotos/galeria-03.jpg", legenda: "" },
    { foto: "fotos/galeria-06.jpg", legenda: "" },
    { foto: "fotos/galeria-07.jpg", legenda: "" },
    { foto: "fotos/galeria-09.jpg", legenda: "" },
    { foto: "fotos/galeria-10.jpg", legenda: "" },
    { foto: "fotos/galeria-11.jpg", legenda: "" },
    { foto: "fotos/galeria-12.jpg", legenda: "" },
    { foto: "fotos/galeria-13.jpg", legenda: "" },
    { foto: "fotos/galeria-14.jpg", legenda: "" },
    { foto: "fotos/galeria-15.jpg", legenda: "" },
    { foto: "fotos/galeria-16.jpg", legenda: "" },
    { foto: "fotos/galeria-17.jpg", legenda: "" },
    { foto: "fotos/galeria-18.jpg", legenda: "" },
  ],

  // Motivos (ela toca no cartão para revelar)
  motivos: [
    "Seus abraços fortes",
    "O carinho que só você sabe dar",
    "Você sempre acredita em mim",
    "Você me ensinou a ter mais paciência",
    "Você veio para somar na minha vida",
    "Você caiu no meu “UAU” kkkkk",
  ],

  // Carta final
  carta: {
    saudacao: "Sophia, meu amor,",
    paragrafos: [
      "Hoje faz 1 ano que estamos juntos. Passamos por inúmeras coisas até aqui e creio que o Senhor irá nos manter unidos até que a morte nos separe.",
      "Confesso que antes de eu namorar você, eu era um cara meio frio, ficava bem isolado, não me distraía do trabalho, dos estudos, das cobranças da vida adulta. Entretanto, você veio em uma época em que eu nem sequer cogitava namorar. Você me pegou desprevenido kkkkkk! Nunca pensei que você fosse cair no “UAU” que mandei nos seus stories kkkkk",
      "Olha, nesse pouco tempo que estamos juntos, aprendi muita coisa com você, amor. Uma delas é ter mais paciência, uma coisa que ainda estou melhorando, mas que antes de te namorar eu não tinha. Você veio na minha vida para somar, e eu hoje não consigo me ver sem você nela.",
      "Gosto muito do seu jeito de demonstrar afeto: os abraços fortes, o carinho que só você sabe dar kkkkkk. Enfim, amo tudo isso em você. Este ano eu consegui coisas que jamais pensaria em conquistar, e tudo com o seu apoio, pois você sempre acredita em mim, e isso faz uma enorme diferença. Obrigado por isso!",
      "Amor, feliz 1 ano juntos! Ainda não é 1 ano de namoro, então se prepare, que logo mais pra frente eu faço outra surpresa. Eu só tenho que te agradecer por chegar na minha vida e ter me completado. O que eu puder fazer para que você seja feliz, pode ter certeza, eu farei, meu amor.",
    ],
    assinatura: "Te amo, Kauann",
  },

  // Música de vocês (opcional). Cole o link de uma música do Spotify
  // (ex.: https://open.spotify.com/track/...) ou deixe vazio "".
  musica: "",

  rodape: "Feliz 1 ano, meu amor.",
};
