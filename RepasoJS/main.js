var nombre = "Mario Lara"
var altura = 189;

var concatenacion = nombre + " " + altura
/*
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido ${altura} cm</h3>
`

if(altura >= 190){
    datos.innerHTML += `<h1> Eres una persona ALTA</h1>`
}else{
    datos.innerHTML += `<h1> Eres una persona BAJITA</h1>`
}

for(var i = 2000; i<=2020; i++){
    // bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;

}
*/
function MuestraMiNombre(nombre, altura){
    var misDatos = datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido ${altura} cm</h3>
    `
    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Mario Lara", 190);
}

imprimir();

var nombres = ['Victor', 'Antonio', 'Joaquin', 'Mario']
/*
document.write('<h1>Lista de nombres</h1>');
for(i=0; i<nombres.length; i++){
    document.write(`<p>${nombres[i]}</p>` + '<br/>');
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

var carro = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad)
    },
    propiedad1: "valor aleatorio"
};

carro.mostrarDatos();

document.write("<h1>"+carro.modelo+"</h1>");

console.log(carro);

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola a todos!";

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000)
})

saludar.then(resultado => {
    alert(resultado);
}).catch(err => {
    alert(err);
});