
const list = document.querySelector("ul")
const mapeando = document.querySelector(".Mapear")
const mostrartudo = document.querySelector(".mostrartudo")
const somartudo = document.querySelector(".somar-tudo")
const filtro = document.querySelector(".filtrar-tudo")

function showall(productsArray) {
    let Myli = '';
    productsArray.forEach(product => {
        Myli += `
         <li>
            <img src="${product.src}"> 
            <p>${product.name}</p>
            <p class="priceitem">$ ${product.price}</p>
         </li>
         `;
    });

    list.innerHTML = Myli;
}


function descont() {
    const descontando = menuOptions.map(prices => {
        prices.price = prices.price * 0.9
        return prices;

    })

    showall(descontando)
}
 
function somando () {
const soma = menuOptions.reduce((acumulador, valor) => {
    if (valor.price > 0) {
        return acumulador + valor.price;
    } else {
        return acumulador;
    }
}, 0);

console.log (soma)
list.textContent = soma;

}

function filtros() {
    const filtrando = menuOptions.filter((valor) => valor.vegan === true);
    list.innerHTML = filtrando;
    showall(filtrando);
    console.log(filtrando);
    return filtrando
  }


mostrartudo.addEventListener('click', () => showall(menuOptions));
filtro.addEventListener('click', filtros)
mapeando.addEventListener('click', descont)
somartudo.addEventListener('click', somando)
