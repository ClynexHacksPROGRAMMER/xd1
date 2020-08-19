const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const Cards = require("discord-cards"); // Este NPM será con que se generará la imágen
  const Enmap = require("enmap"); // Necesitaremos un NPM de nivel en este caso usaré ENMAP pueden usar Discord-Leveling o DB, étc
  client.coins = new Enmap({ name: "coins" }); // Sistema de nivel de ENMAP
  client.admin = new Enmap({ name: "admin" }); // Sistema de nivel de ENMAP

  //Ponen el IF Command o si usan con command handler ponen a su gusto
  const key = `${message.guild.id}-${message.author.id}`; // se define la palabra key
  const imagen = await Cards.crearCard(
    "Discord",
    `${client.coins.get(key, "coins")}`,
    `${client.coins.get(key, "level")}`,
    message.author.username,
    message.author.displayAvatarURL
  ); // Lo personalizan a su gusto, hay dos opciones el formato "DISCORD" o "Youtube" la personalizan a su gusto
  const attachment = new Discord.Attachment(imagen, "card.png"); // se define la imágen (card.png)

  message.channel.send(attachment); // se envia
};
