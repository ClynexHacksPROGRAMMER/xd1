const Discord = require("discord.js");
module.exports = async (client, message) => {
  const msg = message;
  
  

  
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

if (msg.content.match(RegMention)) { //Creamos la condicional
      const quienmenciono = new Discord.MessageEmbed()
        .setTitle(`Quien menciono >:c`)
        .setImage(
          `https://media.discordapp.net/attachments/734849475511582750/743206304054771712/QuienMenciono.png`
        )
        .setColor(0x66b3ff)
        .setFooter(`>:c`);
      message.channel.send(quienmenciono);

}
    let RegMention3 = new RegExp(`^<@!?734829513799761980>( |)$`); //Este es el RegExp que utilizaremos

if (msg.content.match(RegMention3)) { //Creamos la condicional
 message.react("734829513799761980")
}

  
  let RegMention2 = new RegExp(`^<@!?678275999812550676>( |)$`); //Este es el RegExp que utilizaremos

if (msg.content.match(RegMention2)) { //Creamos la condicional
  message.delete()
      const quienmenciono = new Discord.MessageEmbed()
      
        .setTitle(`Quien menciono a ludi >:c`)
        .setImage(
          `https://media.discordapp.net/attachments/734849475511582750/743206304054771712/QuienMenciono.png`
        )
        .setColor(0x66b3ff)
        .setFooter(`>:c`);
      message.channel.send(quienmenciono);
  message.channel.send(`${message.author} POR QUE MENCIONAS A LUDI >:C`)

}

  const db = require("megadb");
  let prefixdb = new db.crearDB("prefijos");
  let prefix2 = prefixdb.has(message.guild.id)
    ? await prefixdb.get(message.guild.id)
    : client.config.prefix;

  if (!message.content.startsWith(prefix2)) return;
  if (message.author.bot) return;

  // Definiendo los argumentos y comandos.
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!cmd) return; // Si no hay comandos no ejecute nada.

  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
  cmd(client, message, args);
};
