const { Client, MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");
const Discord = require("discord.js");
const weather = require("weather-js");
module.exports = async (client, message, args, ops) => {
  let author = message.author.username;
  let user = message.mentions.users.first();
  let url = await marsnpm.cry(); //aqui se pone el tipo de reaccion que sera
  const embed = new Discord.MessageEmbed()
    .setTitle(`${author} se puso a llorar`)
    .setColor("RANDOM")
    .setFooter("Que mal :(")
    .setTimestamp()
    .setImage(url);

  message.channel.send(embed);
};
