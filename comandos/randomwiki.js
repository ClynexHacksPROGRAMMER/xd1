const { Client, MessageEmbed } = require("discord.js");
const errors = require("../utils/errors.js");
// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = (client, message, args) => {
  let texto = args.join(" ");

  let wiki = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      "[¡Pulsa acá para ir a un artículo random de Wikipedia!](http://es.wikipedia.org/wiki/Special:Random)"
    )
    .setThumbnail(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/1024px-Wikipedia_svg_logo.svg.png"
    );

  message.channel.send(wiki);
};
