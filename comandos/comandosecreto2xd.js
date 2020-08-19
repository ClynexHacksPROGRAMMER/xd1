//Documentación de la API de ROBLOX = https://avatar.roblox.com/docs/ aquí muestra como sacar diferentes formatos del avatar.

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  message.delete();
  let username = args.join(" "); //Declaramos una variable que tendra los args, el username.
  if (!username) return message.channel.send("Agrega el usuario."); //return si no lo agrega el usuario.

  let url = `http://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&Format=Png&username=${username}`; //Ponemos un marcador de texto dentro de la plant de cadena, el url que mostrara el avatar.

  let avatar = new Discord.MessageEmbed().setImage(url); //Muestra el avatar.
  message.channel.send(avatar);
};
