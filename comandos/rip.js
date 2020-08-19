const snekfetch = require("snekfetch");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  let person = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.

  if (!person) return message.channel.send(`Debes mencionar a alguien.`);

  await message.channel.send({
    embed: {
      color: "BLUE",
      title: `R.I.P **${person.user.tag}** **F**`,
      image: {
        url: "https://resources.bastionbot.org/images/tombstone_rip.png"
      },
      footer: {
        text: "Que el alma descanse en paz."
      }
    }
  });
};
