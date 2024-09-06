function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
        return
    }

    console.log("campo-pesquisa")
    
    campoPesquisa = campoPesquisa.toLowerCase ()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        descricao = dado.descricao.toLowerCase ()
        tags = dado.tags.toLowerCase()
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <img src=${dado.imagem} alt="Baldur's Gate III">
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
    }
    section.innerHTML = resultados
}

function pesquisarAno() {
    var ano = document.getElementById("ano").value;
    
    ano = parseInt(ano);
            
    if (ano >= 2014 && ano <= 2023) {
        window.location.href = "pagina" + ano + ".html";
    } else {
        alert("Ano inválido. Digite um ano entre 2014 e 2023.");
    }
}


