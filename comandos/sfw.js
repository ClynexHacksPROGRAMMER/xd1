module.exports = async (client, message, args) => {
  //exportamos si tenemos cmd handler
  if (message.channel.id == 734849475511582750) return;
  const Discord = require("discord.js"); //importamos dc.js
  const Weez = require("weez"); //importamos weez
  var weez = new Weez.WeezAPI("86AOJu0tldeqhXyLN1xP6TQsSLOfOc0sBYW2"); //acá pones tu token de weez
  let link = await weez.randomEdgy(); //obtenemos la imagen
  let embed = new Discord.MessageEmbed().setImage(link).setColor("RANDOM");
  message.author.send(embed); //enviamos el embed
};
