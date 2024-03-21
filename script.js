/// Create vector, add random values & calculate the average of the vector elements


let vectorElements = parseInt(prompt("Ingrese la cantidad de elementos que tendrá el vector: "));
let A = [], average = 0;

for(let i = 0; i < vectorElements; i++){
    let vectorRandom = parseInt(Math.random() * (32000 - 1) + 1);
    A.push(vectorRandom);
    document.write(A[i] + '<br>');
    average = average + vectorRandom;
}
calculateAverage();
overAverage(average);
MultOf2An3();
ATimes2();

function calculateAverage(){ 
    average = average / vectorElements;
    document.write('<br>' + 'Promedio: ' + average + '<br>');

    return average;
}    

function overAverage(average){
    let B = [];

    for(let i = 0; i < vectorElements; i++){
       if(A[i] > average){
           B.push(A[i]);
        } 
    }
    for(let i = 0; i < B.length; i++){
        document.write(B[i] + '<br>');
    }

    document.write('<br>');
    
    return B;
}

function MultOf2An3(){
    let counter = 0;
    for(let i = 0; i < vectorElements; i++){
        if(A[i] % 2 == 0 && A[i] % 3 == 0){
            document.write("Multiplos de 2 y de 3: " + A[i] + '<br>');
            counter++;
        }
    }   

    document.write('<br>' + "La cantidad de elementos multiplos tanto de 2 como de 3 son: " + counter + '<br>' + '<br>');
    return counter
}

function ATimes2(){
    let C = [], i;

    for(i = 0; i < vectorElements; i++){
        C.push(A[i] * 2);
     }
    for( i = 0; i < C.length; i++){
        document.write("A multiplicado 2 es: " + C[i] + '<br>');
    }

    return C;
}