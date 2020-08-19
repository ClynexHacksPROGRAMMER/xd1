const Discord = require("discord.js");
const randomPuppy = require("random-puppy"); //Se necesita esta librería.

module.exports = async (bot, message, args) => {
  let reddit = ["SquarePosting"]; //Colocamos los nombres de los subreddits de los que queremos obtener imágenes.

  let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
  //Variable para mostrar una imagen cualquiera de los sub-reddits especificados.

  message.channel.startTyping(); //El bot accionará el evento "Escribiendo.."

  randomPuppy(subreddit)
    .then(async url => {
      await message.channel
        .send({
          files: [
            {
              attachment: url,
              name: "meme.png"
            }
          ]
        })
        .then(() => message.channel.stopTyping());
    })
    .catch(err => console.error(err));
  //Mandará la imagen y luego de tal acción terminará el evento "Escribiendo.."
};
