module.exports = async (client, message, args) => {
  //exportamos si tenemos cmd handler
  const Discord = require("discord.js"); //importamos dc.js
  const Weez = require("weez"); //importamos weez
  var weez = new Weez.WeezAPI("86AOJu0tldeqhXyLN1xP6TQsSLOfOc0sBYW2"); //acá pones tu token de weez
  let link = await weez.randomMeme(); //obtenemos la imagen
  let embed = new Discord.MessageEmbed().setImage(link).setColor("RANDOM");
  message.channel.send(embed); //enviamos el embed
};
