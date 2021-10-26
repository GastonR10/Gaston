/**
 * 1 Consumir el Api, ¿cómo lo consumo?
    1. 1 Axios
   2 Crear un objeto que obtenga el dato deseado
   3 Crear un objeto que obtenga el dato deseado
   4 utilizar el module.exports
 */
const axios = require("axios");

const monedas = async(req, res) => {
    try {
        const monedaDolar = await axios(
            "https://api.coindesk.com/v1/bpi/currentprice.json",                
        );

        const dolar = monedaDolar.data.bpi.USD;

        res.send(dolar);       

    } catch (error) {
        console.log(error);
    }
};

module.exports = { monedas };