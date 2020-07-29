class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }
}

var autobus1 = new Autobus('PEGASUS', 180, 2016);
console.log(autobus1.mostrarAltura());

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('KIA', 160, 2015);
var coche3 = new Coche('Hyundai', 170, 2014);
var coche4 = new Coche('Honda', 150, 2002);

document.write("<h1>Velocidad: "+ coche1.velocidad +"</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

document.write("<h1>Velocidad: "+ coche1.velocidad +"</h1>");