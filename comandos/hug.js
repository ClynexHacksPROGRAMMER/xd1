const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  //Definimos el let gifs con los links de las imagenes
  let gifs = [
    "https://cdn.weeb.sh/images/Sy65_OQvZ.gif", //Introducimos el link del gif
    "https://cdn.weeb.sh/images/r1bAksn0W.gif",
    "https://cdn.weeb.sh/images/ByPGRkFVz.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/662981922603139102/3ef3f01d-9ed9-495b-b5a1-b8e89a8e7fce.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/701972961321549874/f8d4db32-c865-40ea-9661-ab79c1a850f8.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/662984122544685056/4674b7374c834466a4ecc9b45d9a4eb5.gif" //Al igual que aquí, también podemos agregar cuantos gifs queramos solamente agregando mas corchetes
  ];

  let hug = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math

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
          "  Abrazo a " +
          "<" +
          "@" +
          pr.id +
          ">" +
          " <3"
      )
      .setImage(hug)
      .setColor("RANDOM");

    message.channel.send(embed);

    //Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
  }
};
