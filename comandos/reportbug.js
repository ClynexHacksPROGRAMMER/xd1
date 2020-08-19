const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  // Antes de esto, haremos una lista de usuarios (Por ID) que tienen prohibido usar el comando por mal usar el mismo, esto lo pueden hacer con una DB u obtener las IDS mediante un json, yo las hare en un array directamente acÃ¡.
  let prohibidos = ["id", "ID2"];

  // Si la ID del usuario estÃ¡ en la lista de IDS prohibidas:
  if (prohibidos.includes(message.author.id))
    return message.channel.send(
      "¡Tienes prohibido usar este comando por mal usarlo!"
    );

  // Ahora sÃ­, vamos con el ReportBug.

  // Comenzamos definiendo el bug.
  let bug = args.join(" ");

  // Si el usuario no proporciono un bug
  if (!bug) return message.channel.send("¡Escribe un bug a reportar!");

  // Usaremos mi ejemplo bÃ¡sico de awaitReactions (https://portalmybot.com/code/7hl9r8GWxH)

  // Creamos el embed.
  // Nota: Si usan la V11 cambien MessageEmbed por RichEmbed
  let bugc = new Discord.MessageEmbed()
    .setColor(0xffff00) // Color Amarillo (Color en hexadecimal, el cÃ³digo hex despues del 0x)
    .setDescription(
      "¿Estas seguro que quieres reportar este bug? ¡Usar mal el comando causara la prohibicion!"
    )
    .addField("Bug a reportar:", bug);

  // Creado el embed, que mande el mensaje. El mensaje enviado se llamara m
  message.channel.send(bugc).then(m => {
    // Reaccionamos.
    m.react("✅");
    m.react("❎");

    // Creamos el filtro.
    // Nota: El filtro filtra las reacciones que sean con Ã¢ÂÂ o Ã¢ÂÂ y que la id del usuario que reacciona sea la misma que la del autor del mensaje.
    const filtro = (reaction, user) => {
      return (
        ["✅", "❎"].includes(reaction.emoji.name) &&
        user.id == message.author.id
      );
    };

    // Hacemos el awaitReactions, max es el mÃ¡ximo de veces que recolecta reacciones, dejenlo en 1, time es el tiempo en milisegundos para reaccionar, acÃ¡ tiene 60 segundos para responder, errors son los errores que puede tener, Â¡No tocar!.
    m.awaitReactions(filtro, { max: 1, time: 60000, errors: ["time"] })
      .catch(() => {
        // Si no reacciona en el tiempo:
        m.edit("¡No confirmaste a tiempo!");

        // Si reacciona en el tiempo:
      })
      .then(coleccionado => {
        // Definimos la reacciÃ³n
        const reaccion = coleccionado.first();

        // Si la reacciÃ³n es Ã¢ÂÂ
        if (reaccion.emoji.name === "✅") {
          // Creamos el embed para confirmar el reporte:
          let bugco = new Discord.MessageEmbed()
            .setColor(0x2d572c) // Color Verde (Color en hexadecimal, el cÃ³digo hex despues del 0x)
            .setDescription("¡Bug reportado!")
            .addField("Bug reportado:", bug);

          m.edit(bugco);

          // Y ahora creamos el embed que llegara al canal de reportes.

          let bugre = new Discord.MessageEmbed()
            .setColor(0xff0000) // Color rojo (Color en hexadecimal, el cÃ³digo hex despues del 0x)
            .addField(
              `${message.author.id} Ha llegado un reporte de un bug:`,
              bug
            );

          client.channels.cache.get("741721759815827590").send(bugre);

          // Pero si la reacciÃ³n es Ã¢ÂÂ
        } else if (reaccion.emoji.name === "❎") {
          m.edit("Reporte cancelado.");
        }
      });
  });
};
