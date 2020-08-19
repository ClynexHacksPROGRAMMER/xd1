//Para command Handler.

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
module.exports = async (client, message, args) => {
message.delete()
 let encuesta = args.join(" ") // Definimos encuesta para el mensaje que la persona escribe.

    if(!encuesta) return message.channel.send(':pencil: Debes escribir una encuesta a mandar, recuerda que la encuesta se mandara conforme tu la escribas.') // Si no escribes una encuesta te enviara esto el bot.

    
      const embed = new Discord.MessageEmbed() // Creamos el embed
      .setDescription(encuesta)
      .setFooter(message.guild.name, message.guild.iconURL)
      .setTimestamp()
      .setColor(0x6766cc)
      const msg = await message.channel.send(embed)
      await msg.react("743545475604414542")
      await msg.react("743545375214010428")
  } 
