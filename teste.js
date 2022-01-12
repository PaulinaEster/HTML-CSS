let velocidade = 50;

alert(pontos(velocidade));

function pontos(vel){
    if(vel > 70){       
        let aux = 0;
        do{
            aux++;
        }while(aux * 5 + 70 < vel);
        if(aux > 12) return 'Velocidade muito acima do limite carteira confiscada!'; 
        return 'Velocidade acima do limite, total de '+ aux + ' tirados da carteira.'; 
    }
    return 'Velocidade abaixo do limite!';
}

