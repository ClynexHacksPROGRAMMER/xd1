const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  let razon = args.slice(0).join(" "); //aqui se esta creando otra variable

  if (!razon)
    return message.channel.send(
      `${message.author.tag}  Menciona que quieres sugerir weon`
    ); //uso de razon

  message.channel.send("Sugerencia enviada correctamente").then(rm => {
    setTimeout(() => {
      rm.react("✔");
    }, 0);
  });
  let rcanal = client.channels.cache.get("738534674053464087"); //la id sera donde enviara el mensaje del reporte

  let reporte = new Discord.MessageEmbed() //Mensaje Embed
    .setTitle("Sistema de sugerencias")
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Sugerencia de : ", message.author.tag)
    .addField("Sugerencia : ", razon)
    .setColor("RANDOM")
    .setTimestamp();

  rcanal.send(reporte).then(r => {
    setTimeout(() => {
      r.react("743545475604414542");
      r.react("743545375214010428");
    }, 0);
  });
};
