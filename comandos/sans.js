//command handler
const { Client, MessageAttachment } = require("discord.js");

const client = new Client();

const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const attachment = new MessageAttachment(
    "https://media.tenor.com/images/7adb22fcaf7bd49d53d184ce2073d815/tenor.gif"
  );
  message.channel.send(attachment);
};
