//Web Scraping as categorias do menu de favoritos do site AO3.
//Exercício feito por Pamella Sotomayor

//Colar o código na home do https://archiveofourown.org/ e depois chamar a função imprimirCategorias()

function imprimirCategorias() {
  //Armazenando os itens em uma array
  let items = document.querySelectorAll("div.browse.module ul li");

  //Imprindo os itens no console
  items.forEach((item) => {
    console.log(item.innerText);
  });
}
