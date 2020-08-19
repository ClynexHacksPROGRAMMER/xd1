const shorten = require("isgd"); // npm i isgd

module.exports = async (client, message, args, ops) => {
  if (!args[0]) return message.channel.send("Pon una URL para acortarla"); //Por si el user no pone una url

  if (!args[1]) {
    //Si no pone un texto para link personalizado.
    shorten.shorten(args[0], function(res) {
      if (res.startsWith("Error:"))
        return message.channel.send("Usa una URL válida."); //Si la URL original no existe retorna el mensaje de error.

      message.channel.send(`**<${res}>**`); // Si no hay errores en la URL manda la url acortada con un link de isgd random.
    });
  } else {
    //Por si si ponen un texto para link personalizado
    shorten.custom(args[0], args[1], function(res) {
      //esta funcion acorta el link con el texto personalizado
      if (res.startsWith("Error:")) return message.channel.send(`**${res}**`);

      message.channel.send(`**<${res}>**`); //Envia el link personalizado y acortado
    });
  }
};
