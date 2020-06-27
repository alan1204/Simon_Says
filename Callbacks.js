const API_URL = 'https://swapi.dev/api/people/';

/*$.get(`${API_URL}1`, { crossDomain: true }, function (luke) {
  console.log(`Hola yo soy ${luke.name}`);
});*/

const onResponse = function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);
};

/*function obtenerPersonaje(id) {
  const url = `${API_URL}${id}`;
  $.get(url, { crossDomain: true }, onResponse);
}*/

//El orden no sera el mismo en el que lo llamamos debido al asincronismo de Javascript
//(depende del tiempo de respuesta de cada llamada)
/*obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);*/

/*-----------------------------------------------------------------------------*/

//Se le agrega el callback a la funccion
/*function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${id}`;
  $.get(url, { crossDomain: true }, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    if (callback) {
      callback();
    }
  }).fail(function () {
    console.log(`No se puedo obtener el persenoje ${id}`);
  });
}*/

//De esta manera aseguramos el orden de las llamadas gradcias al callback
//A esto se le conoce como Callback Hell debido a la complejidad cuando se llamana varios callbacks
/*obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5);
      });
    });
  });
});*/

/*-----------------------------------------------------------------------------*/

//PROMESAS

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${id}`;
    $.get(url, { crossDomain: true }, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`No se puedo obtener el persenoje ${id}`);
}

/*obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
  })
  .catch(onError);*/

//Encadenar promesas
/*obtenerPersonaje(1)
  .then((personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then((personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then((personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`);
    return obtenerPersonaje(5);
  })
  .then((personaje) => {
    console.log(`Hola, yo soy ${personaje.name}`);
  })
  .catch(onError);*/

/*-----------------------------------------------------------------------------*/

//Multiples Promesas en paralelo
//var ids = [1, 2, 3, 4, 5, 6, 7];

//Array con las promesas
/*var promesas = ids.map((id) => {
  return obtenerPersonaje(id);
});*/

//Obtener datos del array de promesas
/*Promise.all(promesas)
  .then((personajes) => {
    console.log(personajes);
  })
  .catch(onError);*/

/*-----------------------------------------------------------------------------*/

//Async-await

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];

  var promesas = ids.map((id) => {
    return obtenerPersonaje(id);
  });
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();
