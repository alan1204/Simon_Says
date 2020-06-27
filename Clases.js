/*function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}*/

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto() {
    this.altura > 1.75;
  }
}

/*Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};*/

/*Persona.prototype.soyAlto = function () {
  this.altura > 1.75;
};*/

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar() {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}

var alan = new Persona('Alan', 'Alvarez', 1.78); //creamos objeto
var eve = new Persona('Eve', 'Linares', 1.6);
