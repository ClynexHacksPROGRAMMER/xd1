
const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send("¡Oh no! Tu no tienes el poder de ejecutar este comando."); //Si no tienes el permiso de BAN_MEMBERS no puedes usar este comando
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Error en la id del usuario "+id) //Si agregaste mal la ID
        console.log(err)
      })
      message.channel.send(`**Listo, he baneado a <@${id}>.**`)
      
      
    }).catch(() => {
      message.channel.send(`Por favor ingresa una ID para que pueda banearla`) //Aquí te devuelve este mensaje si no agregaste una ID al momento de ejecutar el comando  
    })
      



    }