function pegaNotas(labelNotas){
    var notas = prompt(labelNotas);
    if(notas != null){
        return parseFloat(notas.replace(',' , '.'));
    }else{
        alert('O valor não pode ser vazio.')
    }
}

function mediaNotas(){
    var nota1 = pegaNotas('Digite a nota do 1º bimestre');
    var nota2 = pegaNotas('Digite a nota do 2º bimestre');
    var nota3 = pegaNotas('Digite a nota do 3º bimestre');
    var nota4 = pegaNotas('Digite a nota do 4º bimestre');
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    media = parseFloat(media.toFixed(1));
    
    
    if(media >= 85)
    alert('Sua média é de: ' + media + '\n\nAprovado');
    else{

    }
    if(media >= 84 && media < 85)
        alert('Sua média é: ' + media + '\n\nVocê vai para o conselho de Classe');
    else{

    }
    if(media >= 70 && media < 84)
        alert('Sua média é: ' + media + '\n\nVocê vai para recuperação');
    else{

    }
    if(media < 70 && media > 50)
        alert('Sua média é: ' + media + '\n\nVocê está REPROVADO!');
    else{
    }
    if(media < 50)
        alert('Sua média é: ' + media + '\n\nVocê nem aqui vai estudar mais, seu burro');
    else{
        
    }

} 



mediaNotas