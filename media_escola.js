function mediaNotas(){
    var nota1 = parseFloat(prompt('Digite a nota do 1º bimestre').replace(',','.'))
    var nota2 = parseFloat(prompt('Digite a nota do 2º bimestre').replace(',','.'))
    var nota3 = parseFloat(prompt('Digite a nota do 3º bimestre').replace(',','.'))
    var nota4 = parseFloat(prompt('Digite a nota do 4º bimestre').replace(',','.'))
    var media = ((nota1 + nota2 + nota3 + nota4) / 4)
    media = parseFloat(media.toFixed(1))
    
    
    if(media >= 85)
    alert('Sua média é de: ' + media + '\nAprovado')
    else{

    }
    if(media == 84)
        alert('Sua média é: ' + media + '\nVocê vai para o conselho de Classe');
    else{

    }
    if(media >= 70 && media <= 84)
        alert('Sua média é: ' + media + '\nVocê vai para recuperação');
    else{

    }
    if(media < 70 && media >=50)
        alert('Sua média é: ' + media + '\nVocê está REPROVADO!');
    else{
    }
    if(media < 50)
        alert('Sua média é: ' + media + '\nVocê nem aqui vai estudar mais, seu burro');
    else{
        
    }

} 



mediaNotas();