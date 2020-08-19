const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

let region = {
  brazil: ":flag_br: Brazil",
  "eu-central": ":flag_eu: Central Europe",
  singapore: ":flag_sg: Singapore",
  "us-central": ":flag_us: U.S. Central",
  sydney: ":flag_au: Sydney",
  "us-east": ":flag_us: U.S. East",
  "us-south": ":flag_us: U.S. South",
  "us-west": ":flag_us: U.S. West",
  "eu-west": ":flag_eu: Western Europe",
  "vip-us-east": ":flag_us: VIP U.S. East",
  london: ":flag_gb: London",
  amsterdam: ":flag_nl: Amsterdam",
  hongkong: ":flag_hk: Hong Kong",
  russia: ":flag_ru: Russia",
  southafrica: ":flag_za:  South Africa"
  // Aqui checkeara la region del servidor
};

let verifLevels = ["Ninguno", "Bajo", "Intermedio", "Alto", "Muy alto"];
//Aqui checkeara los niveles de verificacion
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " un dia" : " dias") + " atras";
}
//Aqui checkeara en que dia se creo el grupos

module.exports = async (client, message, args, ops) => {
  //Aqui se hace el embed (Pongan lo que quieran)
  let embed = new Discord.MessageEmbed()
    .setTitle("Informacion de servidor")
    .setDescription("Delivery! Aqui esta la informacion que pedias.")
    .addField("Nombre:", message.guild.name, true)
    .addField("Creado por:", `${message.guild.owner}`, true)
    .addField("Region del servidor:", region[message.guild.region], true)
    .addField(
      "Miembros:",
      `${message.guild.members.cache.filter(member => !member.user.bot).size}`,
      true
    )
    .addField(
      "Bots:",
      `${message.guild.members.cache.filter(member => member.user.bot).size}`,
      true
    )
    .addField(
      "Total (miembros + bots):",
      `${message.guild.members.cache.size}`,
      true
    )
    .addField("Cantidad de canales:", message.guild.channels.cache.size, true)
    .addField("Cantidad de roles:", message.guild.roles.cache.size, true)
    .addField(
      "Creado el:",
      `${message.channel.guild.createdAt
        .toUTCString()
        .substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`,
      true
    )
    .setColor("#EE82EE");
  message.channel.send(embed);
  //Y aqui se envia el embed
  // Si van a cambiar el let embed = new Discord.MessageEmbed() por let serverinfo = new Discord.MessageEmbed()
  //Cambien el message.channel.send(embed); Por message.channel.send(serverinfo);

  // Bueno me voy deka tu like :3
};
