//command handler

const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let miembro = message.mentions.users.first();
  let avatar = miembro.displayAvatarURL;

  avatar({ size: 2048 });
  if (!miembro) {
    const embed = new Discord.MessageEmbed()
      .setImage(`${message.author.displayAvatarURL()}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send(embed);
  } else {
    const embed = new Discord.MessageEmbed()
      .setImage(`${avatar}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send(embed);
  }
};
