const mars = require('marsnpm')
const { Client, MessageEmbed } = require("discord.js"); //Importamos Discord.js

// Creamos una instancia de un cliente de discord
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
let res = await mars.mascara(message.author.displayAvatarURL({ format: "png" }));
return message.channel.send(res)
}