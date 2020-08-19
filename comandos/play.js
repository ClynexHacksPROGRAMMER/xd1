const ytdl = require('ytdl-core');
const yt = require("youtube-dl");
const { Client, Util } = require("discord.js");
const YouTube = require("simple-youtube-api");


const queue = new Map();
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  
  function search() {
    module.exports = async (client, message, args, ops) => {
     args = `ytsearch:${args.join(" ")}`;
  await yt.getInfo(
    args,
    [
      "-q",
      "--skip-download",
      "--no-warnings",
      "--format=bestaudio[protocol^=http]"
    ],
    async (err, info) => {
      if (
        err ||
        info.format_id === undefined ||
        info.format_id.startsWith("0")
      ) {
        let errorMessage;
        if (err && err.stack.includes("No video results")) {
          errorMessage = client.i18n.error(
            message.guild.language,
            "notFound",
            "video"
          );
        } else {
          errorMessage = client.i18n.error(
            message.guild.language,
            "connection"
          );
        }
        return client.emit("error", "", errorMessage, message.channel);
      }
        }
  );
};

  }
  
  function play(guild, song) {
 const serverQueue = queue.get(guild.id);
 // verificamos que hay musica en nuestro objeto de lista
 if (!song) {
  serverQueue.voiceChannel.leave(); // si no hay mas música en la cola, desconectamos nuestro bot
  queue.delete(guild.id);
  return;
 }
  
 const voiceChannel = message.member.voice.channel;

  //verificamos que el usuario solicitante este conectado en un canal de voz.
    if (!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz para reproducir música!');

    const permissions = voiceChannel.permissionsFor(message.client.user);

  //verificamos que el bot tenga permisos de conectar y de hablar en el canal de voz.
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return message.channel.send('¡Necesito permisos para unirme y hablar en el canal de voz!');
    }
  
  // <-- Capturamos la información de la música a reproducir -->

    var opts = {
    maxResults: 1, //Maximo de resultados a encontrar
    key: 'AIzaSyDdQxkUdx9n9vzg_fh-3L4UEOWRJj-5U3k', //Necesitas una CLAVE de la API de youtube. 
    type: "video" // Que tipo de resultado a obtener.
  };

  module.exports = async (client, message, args, ops) => {
    
  const songArg = await search(args.join(' '), opts);
  const songURL = songArg.results[0].link;
  const songInfo = await ytdl.getInfo(songURL);

  const song = {
    title: songInfo.title,
    url: songInfo.video_url,
    author: message.author.tag
  };
  
  

// <-- Verificamos la lista de canciones de un servidor -->


    const dispatcher = serverQueue.connection.play(ytdl(song.url))
 .on('finish', () => {
   // Elimina la canción terminada de la cola.
   serverQueue.songs.shift();

   // Llama a la función de reproducción nuevamente con la siguiente canción
   play(guild, serverQueue.songs[0]);
 })
 .on('error', error => {
  console.error(error);
 });

 // Configuramos el volumen de la reproducción de la canción
 dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  }
  }
}