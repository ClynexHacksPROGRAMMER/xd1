const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  const marsnpm = require("marsnpm");

  let url = await marsnpm.meme();

  let embed = new Discord.MessageEmbed() //Preferible mandarlo en un Embed ya que la respuesta es un link
    .setImage(url);
  message.channel.send(embed);
};
