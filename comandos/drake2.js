const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const Discord = require("discord.js");
  const request = require("request");
  const fs = require("fs");

  let txt = args[0] //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/encodeURIComponent
  let txt2 = args[1] //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/encodeURIComponent

let link = `https://api.alexflipnote.dev/drake?top=${txt}&bottom=${txt2}`;
 
    let embed = new Discord.MessageEmbed() //Mensaje Embed
    .setImage(link)

  
  if(!txt) return message.channel.send("._.")
  message.channel.send(embed);
};
