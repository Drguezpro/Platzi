/*import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then (response=>response.json())
    .then ((products) =>{console.log (products);
})
.catch (error=>console.log(error));*/

//Otra versión OpenAI

import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
}

fetchData(`${API}/products`)
    .then(products => {
        if (Array.isArray(products)) {
            products.forEach(product => {
                console.log(`Product ID: ${product.id}, Title: ${product.title}`);
            })
            console.log(`Total Products: ${products.length}`);
        } else {
            console.log(`Product ID: ${products.id}, Title: ${products.title}`);
        }
    })
    .catch(error => {
        console.error('Error in main process:', error);
    });
    
