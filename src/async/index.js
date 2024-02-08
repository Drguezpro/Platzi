const fnAsync = () =>{
    return new Promise((resolve, reject) =>{//se usa operador ternario y se está forzando con true que se cumpla la condición
        (true) ? setTimeout(() => resolve('Async!!'), 5000) : reject(new Error('Error!')); //arroja "error" en caso de que la condición sea false
    });
}

const anotherFn = async () => { 
    const something = await fnAsync(); // await  nos está regresando una promesa
    console.log(something); 
    console.log('Hello!');
}

console.log('Before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); //aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

