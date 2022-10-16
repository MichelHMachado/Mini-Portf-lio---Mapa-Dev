function selecionarRedes(){
      if(redes.classList.contains("selecionado")){
        return;
      }
        sobre.classList.remove("selecionado");
        redes.classList.add("selecionado");
        infoSobre.classList.remove("selecionado")
        infoRedes.classList.add("selecionado")
}

function selecionarSobre(){
    if(sobre.classList.contains("selecionado")){
        return;
      }
        redes.classList.remove("selecionado");
        sobre.classList.add("selecionado");
        infoRedes.classList.remove("selecionado")
        infoSobre.classList.add("selecionado")
}

