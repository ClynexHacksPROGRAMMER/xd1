const { Client, MessageEmbed } = require("discord.js"); //Importamos Discord.js

// Creamos una instancia de un cliente de discord
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  //Usamos el async

  if (!message.member.hasPermission("KICK_MEMBERS")) {
    //Vemos si el usuario tiene permiso si quieren cambien esto a ADMINISTRATOR
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000)); //Aca si no puede usar el comando envia esto
  }
  // Ahora vamos con el comando
  let mencionado = message.mentions.users.first(); //Esta es la mencion que
  let razon = args.slice(1).join(" "); //La razon del ban usamos el .join(" ")

  if (!mencionado) return message.reply("No ha mencionando a ningún miembro."); //Si no menciono a nadie dira esto
  if (!razon) return message.channel.send("Escriba una razón del uso de ban."); //Si no dio razon dira esto si quieren saquen esto es un extra

  message.guild.members.ban(mencionado, { reason: razon }); //Aqui guardara la razon para un comando por ejemplo listban
  message.channel.send(
    `**${mencionado.username}**, fue baneado del servidor, razón: ${razon}.`
  ); //Aqui dice que fue baneado el usuario
};

// Bueno ya explique todo xd
