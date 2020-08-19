const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  if (!args[0]) return message.reply("Agrege un mensaje para poder enviarlo.");

  let sedijo = args.join(" ");

  if (sedijo.length > 31)
    return message.channel.send("Solo se permite hasta 31 carácteres.");

  const marsnpm = require("marsnpm");

  let img = await marsnpm.sedijo(sedijo);
  message.channel.send({ files: [img] });
};
