const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = async (bot, message, args) => {
  //un comando simple de probabilidad.

  const Mensajes = ["1", "2", "3", "4", "5"];
  const rollfish = Math.floor(Math.random() * Mensajes.length);

  if (rollfish === 1)
    return message.channel.send(
      "Felicitaciones, " +
        message.author.username +
        "! pescaste: :tropical_fish:"
    ); // si el numero random es 1 esta es la respuesta
  if (rollfish === 2)
    return message.channel.send(
      "Felicitaciones, " + message.author.username + "! pescaste: :fish:"
    ); //si el numero random es 2 esta es la respuesta
  if (rollfish => 3)
    return message.channel.send(
      "Felicitaciones, " +
        message.author.username +
        "! pescaste: :shopping_cart:"
    ); //si el numero es mas grande que 3 esta es la respuesta
  if (rollfish => 4)
    return message.channel.send(
      "Felicitaciones, " + message.author.username + "! pescaste: :boot:"
    );
  if (rollfish => 5)
    return message.channel.send(
      "Felicitaciones, " +
        message.author.username +
        "! pescaste: un :zombie:  :0!"
    );
};
