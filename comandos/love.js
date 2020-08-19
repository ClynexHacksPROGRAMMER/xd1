const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  // Get a member from mention, id, or username
  let person = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.

  if (!person)
    return message.channel.send(
      `Debes mencionar a alguien para Medir el amor.`
    );

  const love = Math.random() * 100;
  const loveIndex = Math.floor(love / 10);
  const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

  const embed = new MessageEmbed()
    .setColor("#ffb6c1")
    .addField(
      `☁ **${person.user.tag}** ama a **${message.author.tag}** todo esto:`,
      `💟 ${Math.floor(love)}%\n\n${loveLevel}`
    );

  if (person) return message.channel.send(embed);
};
