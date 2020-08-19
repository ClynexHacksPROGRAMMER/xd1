const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const Discord = require("discord.js");
  const request = require("request");
  const fs = require("fs");

   let avatarautor = message.author.displayAvatarURL()
  
let link = `https://api.alexflipnote.dev/filter/communist?image=${avatarautor}`;
 
    let embed = new Discord.MessageEmbed() //Mensaje Embed
    .setImage(link)

  message.channel.send(embed);
};
