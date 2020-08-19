const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
module.exports = (client, message, args) => {
  let reportado = message.mentions.members.first(); //aqui se esta creando una variable
  let razon = args.slice(1).join(" "); //aqui se esta creando otra variable
  let pruebas = args[2];
  if (!reportado)
    return message.channel.send(
      `${message.author.tag} Menciona al usuario que vas a reportar`
    ); //Uso de Mencion al usuario
  if (!razon)
    return message.channel.send(
      `${message.author.tag}  Menciona una Razon del reporte`
    ); //uso de razon

  message.channel.send("Usuario Reportado Exitosamente").then(rm => {
    setTimeout(() => {
      rm.react("✔");
    }, 0);
  });

  if (!pruebas) return message.channel.send("Mm necesitas pruebas breo una imagen");

  let rcanal = client.channels.cache.get("741721759815827590"); //la id sera donde enviara el mensaje del reporte

  let reporte = new Discord.MessageEmbed() //Mensaje Embed
    .setTitle("Sistema de Reportes")
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Reportante", message.author.tag)
    .addField("Reportado", reportado)
    .addField("Razon del Reporte", razon)
    .addField("Pruebas", pruebas)
    .setColor("RANDOM")
    .setTimestamp();

  rcanal.send(reporte).then(r => {
    setTimeout(() => {
      r.react("⭐");
    }, 0);
  });
};
