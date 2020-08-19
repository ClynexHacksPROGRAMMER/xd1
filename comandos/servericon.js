const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let iconURL = message.guild.iconURL({
    format: "jpg",
    dynamic: true
  });

  message.channel.send(
    new Discord.MessageEmbed().setImage(iconURL).setColor("RANDOM")
  );
};
