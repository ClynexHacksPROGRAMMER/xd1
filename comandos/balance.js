//command handler

const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const db = require("megadb");
  let cantidad = new db.crearDB("Dinero");

  const user = message.mentions.users.first() || message.author;

  if (!cantidad.tiene(`${message.author.id}`)) {
    const embed = new Discord.MessageEmbed()
      .setColor("39FF14")
      .setTitle("Dinero de: **" + user.username + "**")
      .addField("**Dinero:**", "``Sin Dinero``");

    message.channel.send(embed);
  } else {
    let dinero = await cantidad.obtener(`${user.id}`);

    const embed2 = new Discord.MessageEmbed()
      .setColor("39FF14")
      .setTitle("Dinero de: **" + user.username + "**")
      .addField("**Dinero:**", "``" + dinero + "``");

    message.channel.send(embed2);
  }
}; //Cerramos el comando
