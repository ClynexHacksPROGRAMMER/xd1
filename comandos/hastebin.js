const { Client, MessageEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  let MessageArray = message.content.split(" ");

  const hastebin = require("hastebin-paste");

  let contenido = args.join(" "); //Con esto, detectaremos las palabras escritas después del comando.
  hastebin(`${contenido}`, { extension: "txt" })
    .then(haste => {
      //Con esto, estamos haciendo uso del NPM para guardar el contenido en una extensión txt y definiéndolo como haste además de abrir paréntesis y llave.
      const embed = new Discord.MessageEmbed() //Con esto, estamos definiendo la palabra embed como un MessageEmbed.
        .setTitle("¡Texto Guardado!") //Aquí, estámos diciendo que la frase ¡Texto Guardado! es el título del Embed.
        .setDescription(haste) //Al hacer esto, estamos haciendo que envíe el link del hastebin.
        .setColor("RANDOM"); //Esto es definir el color del Embed para que nos de uno al azar.
      message.channel.send(embed); //Aquí, hacemos que envíe el Embed.
    })
    .catch(error => {
      //Aquí cerramos El paréntesis y llave abiertos arriba, y abrimos unos nuevos en el cual definimos para que nos detecte un error.
      console.error(error); //Hacemos que nos envíe el error a la consola.
    }); //Cerramos los paréntesis abiertos arriba.
};
