//if (html.classList.contains("light")) {
// html.classList.remove("light")
//} else {
//   html.classList.add("light")

function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem do light
    img.setAttribute("src", "./assets/raiosemfundo-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/raiosemfundo.png")
  }
}
