const frm = document.querySelector("form")          
const inClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const inRadios = document.querySelectorAll("input")

const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"] // vetor com a lista de clubes

    let selecao
  
    for (let i = 0; i < inRadios.length; i++){
        if(inRadios[i].checked){
            selecao = i // se selecionado, armazena indice do radio selecionado
            break
        }
    }

    if(selecao <= 2){ // se selecao <2, então torce por algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}`
        inClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        inClube.className = "img-fluid" 
        inClube.alt = `Símbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    }else{
        dvTitulo.className = "row"
        inClube.className = "d-none"
        inClube.alt = ""
        localStorage.removeItem("clube")
    }

}

for (const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube)
}
// associa ao evento change de cada botão do form a função trocarClube   
frm.rbBrasil.addEventListener("change", trocarClube)   
frm.rbPelotas.addEventListener("change", trocarClube)   
frm.rbFarroupilha.addEventListener("change", trocarClube) 

const verificarClube = () => {
  if (localStorage.getItem("clube")) {           // se já estiver salvo algum clube
    const clube = localStorage.getItem("clube")  // obtém o nome do clube

    if (clube == "Brasil") {                     // conforme o clube, marca checked 
      inRadios[0].checked = true
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true
    } else {
      inRadios[2] = true
    }
    trocarClube()                          // chama function que troca imagem e cores
  }
}
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)
