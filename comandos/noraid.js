const ms = require("ms");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Necesitas Permisos");
  const embed = new Discord.MessageEmbed()
    .setTitle("Raiders Baneados")
    .setDescription(`Raiders, Spamers Baneados Correctamente`)
    .setColor("RANDOM");
  message.channel.send(embed);

  var ids = [
    "547122592117686304",
    "498215537751490570",
    "698004786397708349",
    "358208699937849345",
    "611159066764378122" //PUEDES AGREGAR LAS IDS QUE QUIERAS PARA BANEAR A ESAS PERSONAS
  ];

  ids.forEach(id => {
    console.log(id);
    message.guild.ban(id.toString());
  });
};
