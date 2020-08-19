const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let miembro = message.mentions.users.first();

  const embed = new Discord.MessageEmbed()
    .setTitle("DAB")
    .setImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQeEIk0YEkQTl-KnrjFpawpRrwZ2jUF4VKEyA7odOOYOcMngr5&usqp=CAU"
    )
    .addField("XD", "Weno ya")
    .setColor(0x66b3ff);

  message.channel.send(embed);
};
