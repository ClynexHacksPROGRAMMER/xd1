const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  //Definimos el let gifs con los links de las imagenes
  let gifs = [
    "https://i.pinimg.com/originals/ce/ae/45/ceae45a4e6449567969b79ae1a16110c.gif", //Introducimos el link del gif
    "https://acegif.com/wp-content/uploads/anime-kiss-m.gif" //Al igual que aquí, también podemos agregar cuantos gifs queramos solamente agregando mas corchetes
  ];

  let cap = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math

  //Ponemos para que al mencionar a alguien se ejecute el código  de gifs randoms
  let pr = message.mentions.users.first();
  if (!pr) {
    message.reply("Debes mencionar a alguien OwO");
  } else {
    //Hacemos el embed y agregamos .setImage y cap que es la encarga de poner los gifs aleatorios
    const embed = new Discord.MessageEmbed()
      .setDescription(
        "<" +
          "@" +
          message.author.id +
          ">" +
          "  Besó a " +
          "<" +
          "@" +
          pr.id +
          ">" +
          " <3"
      )
      .setImage(cap)
      .setColor("RANDOM");

    message.channel.send(embed);

    //Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
  }
};
