//command handler

const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let pr = message.mentions.users.first();
  let user = message.mentions.members.first();
  if (!pr) {
    message.reply("Awww, solo? ;-; , te mando un trago yo :beer: :3");
  } else {
    const embed = new Discord.MessageEmbed()

      .setDescription(
        `<@${message.author.id}> le mandó un trago a <@${user.id}> :beers:`
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  }
};
