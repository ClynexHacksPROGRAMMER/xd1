const { Client, MessageEmbed } = require("discord.js");
const errors = require("../utils/errors.js");
// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();
const akinator = require("mech-aki");
const fs = require("fs");
//Definimos CoolDown
let cooldown = new Set();

module.exports = async (client, message, args, ops) => {
  if (message.channel.id == 734849475511582750) return;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.author.send(
      "¡Necesitas tener permiso de administrador para Cambia mi prefix!"
    );

  const db = require("megadb");
  const prefix_db = new db.crearDB("prefijos");

  let prefijo = args[0]; //Definimos prefijo en argumentos
  if (!prefijo)
    return message.channel.send(
      "Debes poner el nuevo prefijo. `Ejemplo: @setprefix` "
    );

  prefix_db.establecer(`${message.guild.id}`, prefijo); //Ahora con la db Establecemos los args enviados en el mensaje
  message.channel.send("Mi prefijo fue cambiado a: `" + prefijo + "`");
};
