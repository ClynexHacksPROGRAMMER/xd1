const { Client, MessageEmbed } = require("discord.js");
const errors = require("../utils/errors.js");
// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();
const akinator = require("mech-aki");

//Definimos CoolDown
let cooldown = new Set();

module.exports = async (client, message, args, ops) => {
  if (cooldown.has(message.author.id))
    return message.channel.send(
      "Debes esperar **5 Minutos** para usar este comando"
    );
  const megadb = require("megadb");
  const Dinero = new megadb.crearDB("Dinero");
  const user = message.author;
  let trabajo = [
    "Camionero", //Pueden agregar mas trabajos
    "Carpintero",
    "Policia",
    "Ladron",
    "Vendedor de Pizza",
    "Hacker",
    "Vendedor de consoladores",
    "Vendedor de bots",
    "ayudante del admin"
  ];
  let tra = trabajo[Math.floor(trabajo.length * Math.random())];
  const tr = new Discord.MessageEmbed()
    .setTitle("Estas trabajando")
    .setDescription("¡Aguarda unos momentos, estas trabajando!")
    .setColor("RANDOM");
  message.channel.send(tr).then(async m => {
    setTimeout(() => {
      Math.floor(Math.random() * (1001 - 100)) + 100;
      let random = Math.floor(Math.random() * (1001 - 100)) + 100;
      setTimeout(() => {
        m.delete();
      }, 1000);
      if (!Dinero.tiene(`${user.id}`)) {
        Dinero.establecer(`${user.id}`, 0);
      }

      Dinero.sumar(`${user.id}`, random);
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          "¡Adivina quien ha trabajado, pues! :**" + user.username + "**"
        )
        .addField("**Trabajaste** de:", "**" + tra + "**")
        .addField("**Dinero ganado:**", "``" + random + "``");

      m.channel.send(embed);
    }, 10000);

    cooldown.add(message.author.id);
    setTimeout(function() {
      cooldown.delete(message.author.id);
    }, 50000); //5 Minutos (En Milesimas)
  });
}; //Cerramos el comando
