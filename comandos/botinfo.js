module.exports = (client, message, args) => {
  //importamos esto en cmd handler
  const Discord = require("discord.js");
  const servernumero = client.guilds.cache.size; //obtenemos el número de servidores
  const usernumero = client.users.cache.size; //obtenemos el numero de usuarios total
  const embed = new Discord.MessageEmbed() //creamos el embed, lo puedes editar a tu gusto
    .setTitle("Estadísticas")
    .setColor("RANDOM")
    .addField("Usuarios", usernumero)
    .addField(`Developer`, `Loody`, true)
    .addField(`Version`, `v12`, true)
    .addField(`Libreria`, `Discord ^12.1.1 (Js)`, true)
    .addField("Servidores", servernumero)
    .addField(
      `Memoria`,
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MBs`,
      true
    );
  message.channel.send(embed);
};
