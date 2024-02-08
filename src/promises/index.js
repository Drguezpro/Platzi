//ejemplo de contar vacas
const cows = 1; //valor inicial de vacas

const countCows = new Promise(function(resolve, reject){
//solo si el número de vacas supera 10, se llama al resolve
//de lo contrario: se llama a reject
if(cows > 10){
resolve(`We have ${cows} cows on the farm`);
} else {
reject("There is no cows enough on the farm");
}
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows.then((result) => {
console.log(result);
}).catch((error) => {
console.log(error);
}).finally(() => console.log('Finally'));

//Ejercicio Crea una función de delay que soporte asincronismo
function delay(time, message) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(message)
        }, time);
    });
  };
  
delay(3000, 'Hola, después de 3 sgs').then((mens) => {
    console.log(mens)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Fin'));