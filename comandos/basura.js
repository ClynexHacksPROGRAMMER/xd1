const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

const Weez = require("weez");
const weez = new Weez.WeezAPI("86AOJu0tldeqhXyLN1xP6TQsSLOfOc0sBYW2");

// Obtengo una de las imágenes por mención
module.exports = async (client, message, args, ops) => {
  let user = message.mentions.users.first();

  let img = await weez.basura(user.displayAvatarURL({ format: "png" }));

  message.channel.send({ files: [img] });
};
