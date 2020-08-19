const fetch = require("node-fetch");
const tenorapi = "C296O3EBCCN8"; //aqui va la clave api de tenor
module.exports = async (client, message, args, ops) => {
  const marsnpm = require("marsnpm");

  let url = await marsnpm.Eight_ball();
  message.channel.send(url);
};
