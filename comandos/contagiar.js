//command handler

const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  if (!message.member.roles.cache.has("742159635078709381"))
    return message.channel.send("No Tienes Coronavirus!");
  let usuariomencionado = message.mentions.members.first();
  if (!usuariomencionado)
    return message.channel.send("**Debes mencionar a alguien**");
  let elementos = [
    "https://i.imgur.com/XAVNWHV.gif",
    "https://i.imgur.com/QlRNL54.gif",
    "https://media.giphy.com/media/l4FGo3IonE0SdQYeY/giphy.gif"
  ]; //Puedes agregar mas gifs aqui o imagenes
  let captura = elementos[Math.floor(elementos.length * Math.random())];

  message.channel.send(
    `${usuariomencionado} Ha sido contagiado con coronavirus`
  );
  message.channel.send(`${captura}`);
  usuariomencionado.roles.add("742159635078709381");
};
