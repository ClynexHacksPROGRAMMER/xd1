//primero instalamos el modulo "akaneko" usando "npm i --save akaneko"
const akaneko = require("akaneko"); //requerimos el modulo
const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  if (args.length === 0)
    return message.channel.send("Especifica el texto por buscar.");
  const Pornsearch = require("pornsearch");

  try {
    /*
     * eslint no-undef: 0
     */
    const Searcher = new Pornsearch(args.join(" "), "redtube");
    const videos = await Searcher.videos();

    const result = Math.floor(Math.random() * videos.length);

    const { url } = videos[result - 1];
    const thumbnail = videos[result - 1].thumb;
    const { title } = videos[result - 1];
    const { duration } = videos[result - 1];

    const embed = new MessageEmbed()
      .setImage(thumbnail)
      .setURL(url)
      .setDescription(duration)
      .setColor("#ff0000")
      .setFooter(url)
      .setURL(url)
      .setAuthor(title);

    return message.channel.send({ embed: embed });
  } catch (error) {
    return message.reply("No se ha encontrado resultados.");
  }
};
