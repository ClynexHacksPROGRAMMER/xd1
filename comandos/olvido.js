const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

const Weez = require("weez");
const weez = new Weez.WeezAPI("QiwZu9doht7ks9JEcvX6yWzAAq8tcxdCuTTD");

// Obtengo una de las imágenes por mención
module.exports = async (client, message, args, ops) => {
  let user = message.mentions.users.first();

  let img = await weez.olvido(user.displayAvatarURL({ format: "png" }));

  message.channel.send({ files: [img] });
};
