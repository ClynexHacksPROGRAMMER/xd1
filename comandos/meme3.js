//necesitaremos el modulo "memejs" el cual nos ayudara a obtener memes de reddit para instalarlo usaremos npm install memejs
const Discord = require("discord.js"); //importamos dc.js
const { meme } = require("memejs");
module.exports = async (client, message, args) => {
  //exportamos si tenemos cmd handler
  //en este caso yo filtrare el subreddit del que obtendremos los memes, sin embargo se puede no filtrar.

  meme("wholesomememes", function(err, data) {
    if (err) return message.reply(err); //si hay un error se enviara un mensaje con tal error
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(data.url); //el body de data contiene diferentes cosas pero para obtener la imagen necesitamos "url"
    message.channel.send(embed);
  });
};
