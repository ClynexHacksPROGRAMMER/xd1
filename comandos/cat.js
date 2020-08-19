const fetch = require("node-fetch");
const tenorapi = "C296O3EBCCN8"; //aqui va la clave api de tenor
module.exports = async (client, message, args, ops) => {
  fetch(`https://api.tenor.com/v1/random?key=${tenorapi}&q=cat&limit=1`)
    .then(res => res.json())
    .then(json => message.channel.send(json.results[0].url))
    .catch(err => {
      message.channel.send("La solicitud para encontrar un gatito falló :(");
      return console.error(err);
    });
};
