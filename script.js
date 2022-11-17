function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 11) {
        // Criança
        img.setAttribute("src", "foto-crianca-m.png");
      } else if (idade < 27) {
        // Jovem
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-homem.png");
      } else {
        // Pessoa de idade
        img.setAttribute("src", "foto-senhor-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 11) {
        // Criança
        img.setAttribute("src", "foto-crianca-f.png");
      } else if (idade < 27) {
        // Jovem
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-mulher.png");
      } else {
        // Pessoa de idade
        img.setAttribute("src", "foto-senhora-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
