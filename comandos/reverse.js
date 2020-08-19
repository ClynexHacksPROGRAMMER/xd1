const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("**El uso es:** __`fm!reverse <mensaje>`__")
    .setColor("RANDOM");

  if (!args[0]) return message.channel.send(embed);
  const reverse = args
    .join(" ")
    .split("")
    .reverse()
    .join("");
  message.channel.send(reverse);
};
