function pesquisar() {
    // Obtém a seção de resultados e o valor do campo de pesquisa
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Normaliza o texto da pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis para armazenar os resultados e as informações dos países
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let capital = "";

    // Itera sobre os dados dos países
    for (let dado of dados) {
        // Normaliza o título e a capital para minúsculas
        titulo = dado.titulo.toLowerCase();
        capital = dado.capital.toLowerCase();

        // Verifica se o campo de pesquisa está vazio
        if (campoPesquisa === "") {
            // Exibe uma mensagem indicando que o campo está vazio
            section.innerHTML = `<div class="item-resultado">
                <p><strong>Ops... Você não digitou nada.</strong></p>
            </div>`;
            return; // Encerra a função
        }

        // Verifica se o texto da pesquisa está contido no título ou na capital
        if (titulo.includes(campoPesquisa) || capital.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado encontrado
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <ul>
                        <li><span>Capital:  </span>${dado.capital}</li>
                        <li><span>Idioma oficial:  </span>${dado.idioma}</li>
                        <li><span>Moeda:  </span>${dado.moeda}</li>
                    </ul>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados
    if (!resultados) {
        // Exibe uma mensagem indicando que não foram encontrados resultados
        resultados = `
            <div class="item-resultado">
                <p><strong>Ops... Não foi possível encontrar resultados para sua busca.</strong></p>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção de resultados
    section.innerHTML = resultados;
}

function limpar(){
          // Obtém o elemento input pelo seu ID (substitua "meuInput" pelo ID real)
        const input = document.getElementById("campo-pesquisa");
        let section = document.getElementById("resultados-pesquisa");
      
        // Limpa o valor do input
        input.value = "";
        // Limpa o valor do section
        section.innerHTML = "";
}
