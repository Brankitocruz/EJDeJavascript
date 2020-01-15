//E1
function calcularMaximo (listaDeNumeros){
    let candidato = listaDeNumeros[0];
    for (let i=1; i<listaDeNumeros.length; i++){
        if (candidato < listaDeNumeros[i]){
            candidato = listaDeNumeros[i];
        }
    }
    return candidato;
}
//console.log(calcularMaximo([9, 5, 30, 12]));



function calcularMaximo2(listaDeNumeros) {
    return Math.max (...listaDeNumeros);
}



//E2
function sacarPromedio (listaDeNumeros){
    let acumulador = 0;
    for(let i = 0; i < listaDeNumeros.length; i++){
        acumulador += listaDeNumeros[i];
    }
    return acumulador/listaDeNumeros.length;

}
//console.log(sacarPromedio([9, 5, 30, 12]));



//E4
function MenoresADiez (listaDeNumeros){
    let listaMenores= [];
    for (let i=0; i<listaDeNumeros.length; i++){
        if (listaDeNumeros[i]<10){
            listaMenores.push (listaDeNumeros[i]);

        }
    }
    return listaMenores;
}
//console.log (MenoresADiez([11,15,9,7,4]));


//E5
function DobleDeCadaNum (ListaNum){
    let numx2 = [];
    for (let i=0; i<ListaNum.length; i++){
        numx2.push(ListaNum[i]*2);
    }
    return numx2;
}
//console.log(DobleDeCadaNum([10, 9, 18, 17]));


//E6
function NumPrimo (num){
    for(let i=2; i<num; i++){
        if(num%i===0){
            return false
        }
        else return true;
    }
}
console.log(NumPrimo(9));