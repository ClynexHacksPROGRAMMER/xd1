const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000));
  }

  let mencionado = message.mentions.users.first();
  let razon = args.slice(1).join(" ");

  if (!mencionado) return message.reply("No ha mencionando a ningún miembro.");

  message.guild.members.kick(mencionado, { reason: razon });
  message.channel.send(
    `**${mencionado.username}**, fue kickeado del servidor, razón: ${razon}.`
  );
};
