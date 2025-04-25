const etapas = [
    "🌾 É uma tecnologia utilizada para realizar as atividades humanas atrave sde maquinas e robos operados remotamente.",
    "🚛 Pulverização, mapeamento da área, análise do solo, colheita de cereais.",
    "🏬 Nos centros de distribuição, os alimentos são separados, armazenados e enviados para mercados e feiras.",
    "🍽️ Finalmente, os alimentos chegam aos consumidores nas cidades, sendo parte essencial de uma alimentação saudável e conectada ao campo."
  ];
  
  function showInfo(index) {
    const infoBox = document.getElementById("info");
    infoBox.innerHTML = `<p>${etapas[index]}</p>`;
  }
  