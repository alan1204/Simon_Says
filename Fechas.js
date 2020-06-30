function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24; //milisegundos en un dia

  const diferencia = Math.abs(fecha1 - fecha2); //Nomuero absoluto (numero positivo)

  console.log(`Dias de nacido: ${Math.floor(diferencia / unDia)}`);
  console.log(`Años de nacido: ${Math.floor(diferencia / unDia / 365)}`);
}

const hoy = new Date();
const nacimiento = new Date(1993, 3, 12);

diasEntreFechas(hoy, nacimiento);
