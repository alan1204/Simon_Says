var Alan = {
  nombre: "Alan",
  apellido: "Alvarez",
  edad: 27,
};

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
};

const esMayorDeEdad = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD;
};

//Si la funcion solo retorna algo se puede borrar la palabra RETURN y las llaves
const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

//Como solo nos interesa la edad podemos destructurar el parametro
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    onsole.log(`${persona.nombre} es menor de edad`);
  }
}
