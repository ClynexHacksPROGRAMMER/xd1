const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const msg = await message.channel.send(`🏓 Pinging....`);

  msg.edit(`🏓 Pong!
        Latency is ${Math.floor(
          msg.createdTimestamp - message.createdTimestamp
        )}ms
        API Latency is ${Math.round(client.ping)}ms`);
};
