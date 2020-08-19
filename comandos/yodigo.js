const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
 let a = args.join(" ");
  if (!a) return message.channel.send("Que vas a decir ?");
  message.channel.send(`${message.author} Dice ${a}`);
};
