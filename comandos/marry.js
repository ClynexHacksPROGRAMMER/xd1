const db = require("megadb");
const marry_db = new db.crearDB("Marry");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "marry",
  alias: [""],
  description:
    "Este comando sirve para poder proponer e casarse con una persona."
};
module.exports = async (client, message, args, ops) => {
  const usuario = message.mentions.users.first() || client.users.get(args[0]); // Hacemos que la persona la que quiera proponer matrimonio pueda mencionar o poner una ID

  if (!usuario)
    return message.channel.send(
      "Debes mencionar a una persona para poder casarte."
    ); // Si la persona no menciona o pone ID de un usuario valido enviara este mensaje.

  if (marry_db.tiene(usuario.id))
    return message.channel.send("Esta persona ya esta casada."); // Envia este mensaje si la persona que mencionan ya esta casada.

  if (marry_db.tiene(message.author.id))
    return message.channel.send(
      "<:ola:739588199256555550> Tu ya estas casado con alguien."
    ); // Envia este mensaje si la persona que propone matrimonio esta casada.

  message.channel.send(
    `${usuario} aceptas a ${message.author} como tu legitimo(a) esposo(a)?`
  ); // Envia el mensaje para proponer matrimonio a la persona.

  const collector = message.channel.createMessageCollector(
    m => m.author.id === usuario.id && m.channel.id === message.channel.id,
    { time: 30000 }
  ); // Ponemos que tiene 3 segundos para poder responder a este mensaje.

  collector.on("collect", collected => {
    if (collected.content.toLowerCase() === "si") {
      message.channel.send("Los declaro marido y mujer."); // Envia este mensaje si la respuesta de la persona que mencionaron es "yes"
      marry_db.establecer(message.author.id, {
        id: usuario.id,
        tag: usuario.username
      }) /
        marry_db.establecer(usuario.id, {
          id: message.author.id,
          tag: message.author.username
        }); // Enviamos esto a la base de datos.
    } else if (collected.content.toLowerCase() === "no") {
      message.channel.send("Esta ceremonia a terminado."); // Si la respuesta es no enviara este mensaje.
    }
  });

  collector.on("end", collected => {
    if (collected.size === 0)
      return message.channel.send(
        "Lamentablemente la persona con la que se pensaba casar no llego a tiempo a la iglesia, lo sentimos pero esto no puede llevarse a cabo. :rolling_eyes:"
      ); // Si la persona no responde en los 3 segundos de espera, enviara esta respuesta.
  });
};
