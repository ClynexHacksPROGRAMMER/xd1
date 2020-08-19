const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  message.delete();
  let miembro = message.mentions.users.first() || message.author;
  var darksouls = [
    "https://cdn.discordapp.com/attachments/691179999134351380/720503450730758255/wooshfunar.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/720477992689860628/31107078.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/720478099820642354/izv1fiber2t41.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/719017930175676486/9k.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/719017726689148958/30902723.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/719017817290178610/31589661.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/719017521121853440/Z.png",
    "https://cdn.discordapp.com/attachments/691179999134351380/719017404788768828/JsLy6d3w_400x400.png",
    "https://cdn.discordapp.com/attachments/672539492313464832/718977726077337710/5d965e7b7df74.png",
    "https://cdn.discordapp.com/attachments/672539492313464832/718977768754511933/hqdefault.png",
    "https://cdn.discordapp.com/attachments/672539492313464832/718977810617729024/30870506.png"
  ]; //Imagenes para funar, puedes agregar más a tu gusto

  let oruga = darksouls[Math.floor(darksouls.length * Math.random())];

  let funar = new Discord.MessageEmbed();
  funar.setColor("RANDOM");
  funar.setDescription(
    "**" + message.author.username + "** funó a **" + miembro.username + "**"
  );
  funar.setImage(oruga);
  funar.setTimestamp();
  message.channel.send(funar); //En un embed se ve mejor el comando
};
