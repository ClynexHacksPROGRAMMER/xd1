const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const añadibles2 = ["699733217304903730", "938475"];

  let usuario = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.
  if (usuario == client.user)
    return message.channel.send("A mi no me hackees xd");
  if (!usuario)
    return message.channel.send(`Debes mencionar a alguien para hackearlo.`);
  const correos = ["gmail.com", "yahoo.com", "discordapp.com"]; //Estos son la lista de correos (las extensiones)

  const añadibles = ["43242", "938475"]; // La lista de textos que se añadirÃÂ¡n al correo. Puedes agregar mas.

  let correosresult = Math.floor(Math.random() * correos.length); // Haciendo que los correos sean random.
  let añadiblesresult = Math.floor(Math.random() * añadibles.length); // Haciendo que los añadibles a los correos sean random.

  const agregablescontraseñas = ["4TeRDZ", "tY9Rs"]; // La lista de los caracteres que se le agregarÃÂ¡n a la contraseÃÂ±a. Puedes agregar mas, los caracteres son los que tu quieras poner

  let agregablescontraseñasresult = Math.floor(
    Math.random() * agregablescontraseñas.length
  ); // Haciendo que lo que se agregarÃÂ¡ a la contraseÃÂ±a sea random

  const contraseñas = [
    `${usuario.user.username}${agregablescontraseñas[agregablescontraseñasresult]}`,
    `${agregablescontraseñas[agregablescontraseñasresult]}${usuario.user.username}`
  ]; // Creando las variables de las contraseÃÂ±as.

  let contraseñasresult = Math.floor(Math.random() * contraseñas.length); // Haciendo que las variables de las contraseÃÂ±as sean random

  message.channel
    .send(
      new Discord.MessageEmbed()
        .setTitle(`Hackeando a ${usuario.user.tag}`)
        //    .setImage(ImagenAMostrarAntesDeEditarMensaje) Puedes aÃÂ±adir una imagen que cargarÃÂ¡ antes de editar el mensaje
        .setColor("#8892fd")
    )
    .then(
      m => {
        const embed2 = new Discord.MessageEmbed()
          .setTitle(`Cuenta de ${usuario.user.tag}`)
          .addField(
            "Correo:",
            usuario.user.username +
              añadibles[añadiblesresult] +
              "@" +
              correos[correosresult]
          )
          .addField("Contraseña:", contraseñas[contraseñasresult])
          .setColor("#40c452");
        setTimeout(() => {
          m.edit(embed2);
        }, 1000);
      } // Embed con los resultados y 1 segundo para editar mensaje.
    );
};
