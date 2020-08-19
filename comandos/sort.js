const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args) => {
  
    if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send("No tienes permitido esto.");
  let tiempo = args[0]
  let loquesorteara = args[1]
  
  
  
  if(!tiempo) return message.reply("Pon tiempo en minutos ej : fm!sort 30 (30 Son los minutos no pongas M solo pon los minutos) 100k En economia (Eso es lo que sortearas)")
  if(!loquesorteara) return message.reply("Que sortearas ?")
  
  message.delete()
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("RANDOM")
    .setTitle("Nuevo Sorteoo !")
    .addField("Reacciona Para participar en el sorteo", "Reacciona a el emoji de sorteos xd PD : 💚 uhgu", true)
    .addField("Autor de sorteo : " + message.author.tag, "Esta persona hiso el sorteo xd", true)
    .addField("Ganadores Max : 5", "Dou", true)
    .addField("Lo que se sorteara : " + loquesorteara, "UwU", true)
    .addField("Tiempo : " + tiempo +"m", "Participa rapidoo !", true)
    .setFooter("Sorteitooo");
  
message.channel.send(embed).then(msg => { // Enviamos el mensaje al cual se alojara el sorteo.

  
msg.react("743642017178845285") // Reaccionamos con el emoji para comenzar con el sorteo.

const filter = (reaction, user) => reaction.emoji.id == '743642017178845285' && user.id !== client.user.id; // Creamos un filtro que impone que el emoji sea en este caso el corazon verde y en el mismo filtro impedimos que la reacción del bot se una al colector.

const collector = msg.createReactionCollector(filter, {time: tiempo * 60000}); // Integramos el filtro al crear el colector y colocamos un tiempo de 20 segundos para la realizacion del sorteo.

var array = [] // Creamos un array con los participantes

collector.on("collect", r => {
array.push(r.users.cache.last().id); // Aca vamos pusheando el ultimo usuario que entro al sorteo, es decir el ultimo que va reaccionando.

message.channel.send("Muy bien. El usuario "+r.users.cache.last().username+" se ha unido al sorteo.") // Enviamos un mensaje para verificar, opcionalmente.
})

collector.on("end", () => {

const winner = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.
const winner2 = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.
const winner3 = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.
const winner4 = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.
const winner5 = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.

  message.channel.send("Ganador <@"+winner+"> "+ message.author) // Y finalmente enviamos el mensaje anunciando al ganador de el.
  message.channel.send("Ganador <@"+winner2+"> "+ message.author) // Y finalmente enviamos el mensaje anunciando al ganador de el.
  message.channel.send("Ganador <@"+winner3+"> "+ message.author) // Y finalmente enviamos el mensaje anunciando al ganador de el.
  message.channel.send("Ganador <@"+winner4+"> "+ message.author) // Y finalmente enviamos el mensaje anunciando al ganador de el.
  message.channel.send("Ganador <@"+winner5+"> "+ message.author) // Y finalmente enviamos el mensaje anunciando al ganador de el.
  message.channel.send("(Puse 5 ganadores por si quiere el staff 5 ganadores xd si no queria eso bueh xd)")
})

})
}