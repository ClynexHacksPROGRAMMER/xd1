//command handler
const { Client, MessageAttachment } = require("discord.js");

const client = new Client();

const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const attachment = new MessageAttachment("https://i.imgur.com/fYrbVLA.gif");
  message.channel.send(attachment);
};
