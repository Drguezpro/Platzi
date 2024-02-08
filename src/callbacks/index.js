function sum(num1, num2){
return num1 + num2
}

function calc (num1, num2, callback) {
    return callback (num1, num2)
}

console.log (calc (3, 8, sum))

setTimeout (()=>{
    console.log ('Probando setTimeout')
}, 5000)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

setTimeout(saludar, 3000, 'Pablo')