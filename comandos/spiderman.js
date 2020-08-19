//command handler
const { Client, MessageAttachment } = require("discord.js");

const client = new Client();

const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const attachment = new MessageAttachment(
    "https://media1.tenor.com/images/837072ca19e3c5cebea76e2693f3100d/tenor.gif"
  );
  message.channel.send(attachment);
};
