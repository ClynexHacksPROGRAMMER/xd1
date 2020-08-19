//command handler

const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  message.delete()
  let texto = args.join(" ");
message.channel.startTyping();//Esto hace que el bot comienze a escribir
  
setTimeout(() => {//Agregamos un setTimeout para que el efecto dure mas
  message.channel.send(texto);//enviamos el mensaje
  message.channel.stopTyping()//Hacemos que el bot deje de escribir
}, 5000);//cerramos el setTimeout
};//cerramos la condición