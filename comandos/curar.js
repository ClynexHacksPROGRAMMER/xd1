const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args) => {
  //exportamos para cmd handler

  let usuariomencionado = message.mentions.members.first();
  var ids = [
    "678275999812550676",
    "395637062990299139",
    "632775917411762186",
    "488142327710482432",
    "350735594638409729",
    "694025783907188768"
  ]; //Aqui puedes poner las ids de los usuarios que quieres que puedan usar el comando, incluyendo la tuya.

  if (!ids.some(ids => message.author.id == ids))
    return message.channel.send(
      ":x: ¡No tienes permisos para usar ese comando!"
    ); //esta parte del codigo harÃ¡ que solo las ids que pusiste en el array "ids" sean las que puedan ejecutar el comando.
  if (!usuariomencionado.roles.cache.has("742159635078709381"))
    return message.channel.send("Esta persona no tiene coronavirus!");
  usuariomencionado.roles.remove("742159635078709381");
  message.channel.send(`${message.author} Ha curado a ${usuariomencionado}`);
}; //cerramos el comando.
