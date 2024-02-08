const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';//API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
  
    xhttp.open('GET', urlApi, true);//petición "obtener" con true para habilitarlo
    xhttp.onreadystatechange = function (event) {//escucha diferentes estados de la solicitud y conocer cuando está disponible la información
      if (xhttp.readyState === 4) {//si el estado ha sido completada la llamada
        if(xhttp.status === 200) {//el servido responde de forma correcta
          callback(null, JSON.parse(xhttp.responseText));//dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
        } else {
          const error = new Error('Error' + urlApi);
          return callback(error, null);//es null porque no se está regresando ningún dato
        } 
      }
    }
    xhttp.send();
  }

  /*fetchData(`${API}/products`,function(error1,data1){
    if(error1)return console.error(error1);
      fetchData(`${API}/products/${data1[1].id}`,function(error2,data2){
        if(error2)return console.error(error2);
          fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3)return console.error(error3);
              console.log(data1[1]);
              console.log(data1[1].title);
              console.log(data1[1].category.name);
              console.log(`Número de productos: ${data1.length}`);
          });
//      });
//  });*/
// Obtener categorías
fetchData(`${API}/categories/1/products`, function (errorCategories, categoriesData) {
  if (errorCategories) return console.error(errorCategories);

  // Imprimir la cantidad de categorías
  console.log(`Número de categorías: ${categoriesData.length}`);

  // Recorrer todas las categorías e imprimir sus detalles
  for (let j = 0; j < categoriesData.length; j++) {
      console.log(`Detalles de la categoría ${j + 1}:`);
      console.log(categoriesData[j]);
      //console.log(categoriesData[j].name);
     
  }
});