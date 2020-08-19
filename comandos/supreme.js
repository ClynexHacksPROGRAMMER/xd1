const Discord = require("discord.js")//lo de siempre

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
let txt = encodeURIComponent(args.join(" ")); //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/encodeURIComponent

let link = `https://api.alexflipnote.dev/supreme?text=${txt}`;
if (!args.join(" ")) return message.channel.send("Debes colocar un texto"); //si no coloca nada
  let embed = new Discord.MessageEmbed()//creamos el embed
  .setImage(link);
  message.channel.send(embed);//enviamos el embed
}