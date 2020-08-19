const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  // Get a member from mention, id, or username
  let person = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.

  if (!person)
    return message.channel.send(`Debes mencionar a alguien para Matarlo.`);

  let gifs = [
    "https://cdn.discordapp.com/attachments/699103546607665154/703422675338395688/734ee8d4ac439779f1b2d9f983da4639.gif",
    "https://cdn.discordapp.com/attachments/699103546607665154/703422674852118649/0196eb188514498242c7eec3ef18e283-7.gif",
    "https://cdn.discordapp.com/attachments/699103546607665154/703422966981197924/361mq07559h31.gif",
    "https://cdn.discordapp.com/attachments/699103546607665154/703424513055916042/xMchCm.gif"
  ]; /* Creamos un array con los GIFS que pueden salir */
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`☠ **${message.author.tag}** Mato a **${person.user.tag}** ☠`)
    .setImage(randomIMG);

  message.channel.send(embed);
};
