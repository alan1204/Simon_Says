var david = {
  nombre: "David",
  apellido: "Baez",
  altura: 1.7,
};

var diana = {
  nombre: "Diana",
  apellido: "Osorio",
  altura: 1.65,
};

var isabela = {
  nombre: "Isabela",
  apellido: "Baez",
  altura: 1.35,
};

var ana = {
  nombre: "Ana Maria",
  apellido: "Baez",
  altura: 1.45,
};

var andres = {
  nombre: "Andres",
  apellido: "Baez",
  altura: 1.8,
};

var antonio = {
  nombre: "Antonio",
  apellido: "Baez",
  altura: 1.68,
};

const esAlta = ({ altura }) => altura > 1.8;

var personas = [david, diana, isabela, ana, andres, antonio];

//var personasAltas = personas.filter(esAlta);

var personasAltas = personas.filter(function (persona) {
  return persona.altura > 1.8;
});

const pasarAlturaACms = (persona) => {
  //persona.altura = persona.altura * 100;

  //crear un nuevo objeto para no modificar el existente
  return {
    ...persona,
    altura: (persona.altura *= 100),
  };
};

var personasCms = personas.map(pasarAlturaACms);

/*for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mode ${persona.altura} mts.`);
}*/
