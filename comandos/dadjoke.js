//debes ejecutar "npm install node-fetch" en tu consola para que funcione

//hecho con command handler, pero lo puedes adaptar a cualquier otro sistema

exports.run = async (
  client,
  message,
  args //command handler
) =>
  //hacemos un fetch a la pagina de chistes
  require("node-fetch")("https://icanhazdadjoke.com/slack")
    .then(res => res.json()) //recogemos los resultados en un .json
    .then(d => message.channel.send(d.attachments[0].text)); //enviamos el primer elemento del json
