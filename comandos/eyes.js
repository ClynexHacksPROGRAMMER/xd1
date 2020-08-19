const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  if (!args[0]) return message.reply("Agrege un mensaje para poder enviarlo.");

  var Weez = require("weez");
  var weez = new Weez.WeezAPI("86AOJu0tldeqhXyLN1xP6TQsSLOfOc0sBYW2");

  let texto = args.join(" ");
  let opt = texto.split(" - ");
  if (!opt[0])
    return message.channel.send(
      "Modo de uso: `@eyes Texto1 - Texto2 - Texto3`"
    );
  if (!opt[1])
    return message.channel.send(
      "Modo de uso: `@eyes Texto1 - Texto2 - Texto3`"
    );
  if (!opt[2])
    return message.channel.send(
      "Modo de uso: `@eyes Texto1 - Texto2 - Texto3`"
    );

  let url = await weez.eyes(opt[0], opt[1], opt[2]);

  message.channel.send({ files: [url] });
};
