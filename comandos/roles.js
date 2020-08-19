const ms = require("ms");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let id = message.guild.id;
  var map = message.guild.roles.cache.map(roles => roles.name).join(" \n ");

  const embed = new Discord.MessageEmbed()
    .setAuthor("ROLES: ")
    .setColor("RANDOM")
    .setDescription(map)
    .setFooter("Lista de roles de: " + message.guild.name);
  message.channel.send(embed);
};
