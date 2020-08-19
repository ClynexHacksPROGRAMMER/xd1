const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  // Get a member from mention, id, or username
  let person = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.

  if (!person)
    return message.channel.send(`Debes mencionar a alguien para amenazarlo.`);

  let gifs = [
    "https://wallpaperstock.net/wallpapers/thumbs1/28486wide.jpg",
    "https://cdn.discordapp.com/attachments/699103546607665154/706286863538716712/ahorita_te_corto_el_internet_para_que_dejes_de_publicar_pendejadas.jpg"
  ]; /* Creamos un array con los GIFS que pueden salir */
  let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.tag}** Amenazo a **${person.user.tag}**`)
    .setImage(randomIMG);

  message.channel.send(embed);
};
