const ms = require("ms");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = (client, message, args) => {
  let skin = args.join(" "); //Nombre de la skin

  if (!args[0]) {
    //Si no proporciona el nombre de la skin
    return message.channel.send("Dime el nombre de una skin"); //Esto enviara un mensaje si no se envió el nombre de la skin
  }

  let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`; //Esto sera la imagen de la skin

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("`Skin nick:` " + skin + "")
    .setImage(url);

  message.channel.send(embed); //Enviamos el embed al canal

  //Si usas este código por favor dame créditos
};
