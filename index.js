//Ejemplo aplicando POO

class Persona{
    constructor(nombre, edad){
        this._nombre=nombre;
        this._edad=edad;
    }
    saludar(){
        console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`);
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }
    get edad(){
        return this._edad
    }
    set edad(nuevoEdad){
        this._nombre=nuevoEdad;
    }
}

let persona1 = new Persona("Rafael", 30);
let persona2 = new Persona("Paulina", 24);

console.log(persona1);
console.log(persona2.saludar());

//SUB CLASE EMPLEADO
class Empleado extends Persona{
    constructor(nombre, edad, sueldo){
        super(nombre, edad);
        this._sueldo=sueldo;
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(nuevoSueldo){
        this._sueldo=nuevoSueldo;
    }
    trabajar(){
        return `Soy ${this._nombre} y recibo un sueldo mensual de ${this._sueldo}`
    }
}

let empleado1 = new Empleado("Fernando", 24 , 450.50);
console.log(empleado1);
console.log(empleado1.trabajar());
