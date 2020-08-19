const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  let text = args.join(" ");

  const mars = require("marsnpm");
  let res = await mars.genHex();
  return message.channel.send(res);
};
