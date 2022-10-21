function verificar(){
    let idade = window.document.querySelector('input#idade').value

    if(idade<16){
        res.innerHTML=(`<strong>Idade:</strong>${idade}. Idade abaixo do exigido para poder votar`);
    } else if(idade<18 && idade>=16){
        res.innerHTML=(`<strong>Idade:</strong>${idade}. Voto <strong>opcional</strong>`)
    } else if(idade <65){
        res.innerHTML=(`<strong>Idade:</strong>${idade}. Voto <strong>obrigatório</strong>`)
    } else if(idade>=65){
        res.innerHTML=(`<strong>Idade:</strong>${idade}. Voto <strong>opcional</strong>`)
    }
}