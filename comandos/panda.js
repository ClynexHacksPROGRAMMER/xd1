const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const mario = require("marioapi"); //lamamos al NPM

  let link = await mario.panda(); //creamos una variable con un await (que para usarlo tendremos que tener un asyc en el evento mensaje) y usamos la "opcion" panda por asi decirlo del NPM,la cual buscara en la API imagenes randoms de pandas.

  const embed = new Discord.MessageEmbed() //creamos un embed

    .setTitle("`:D ¡aqui tienes a un majestuoso panda!` :panda_face:") //un pequeñito texto de acompañamiento.
    .setColor("RANDOM") //pueden poner el color que les guste,yo lo puse random
    .setImage(link) //esta es la imagen del panda
    .setTimestamp(); //esto mostrara en la parte de abajo del embed cuando se uso el comando.

  message.channel.send(embed); //emviamos el embed

  //Nota: deja tu like para mas ejemplos ;)
};
