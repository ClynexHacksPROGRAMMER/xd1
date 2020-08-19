const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  const mars = require("marsnpm");
  let text = args.join(" ");

  if (!text) return message.channel.send("escribe el mensaje!");
  const dou = mars.getSarcastic(text);

  message.channel.send(dou);
  //Resultado:
  //---> HoLa MuNdO
};
