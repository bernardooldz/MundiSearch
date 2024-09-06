function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let resultados = ""

for (let dado of dados) {
    resultados += `
    <div  class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <ul>
            <li><span>Capital:  </span>${dado.capital}</li>
            <li><span>Idioma oficial:  </span>${dado.idioma}</li>
            <li><span>Moeda:  </span>${dado.moeda}</li>
        </ul>
         <a href=${dado.link} target="_blank">Mais informações</a>
     </div>
`
}

section.innerHTML = resultados

}