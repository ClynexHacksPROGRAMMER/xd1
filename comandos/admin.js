const snekfetch = require("snekfetch");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");
module.exports = async (client, message, args, ops) => {
  // Comenzamos mandando el mensaje al que se le recolectaran las reacciones y le hacemos un then.

  message.channel.send("ESPERA...").then(m => {
    message.member.roles.add("733073945271730229");

    const filtro = (reaction, user) => {
      return (
        ["✅", "❎"].includes(reaction.emoji.name) &&
        user.id == message.author.id
      );
    };
    m.awaitReactions(filtro, { max: 1, time: 1000, errors: ["time"] }).catch(
      () => {
        m.edit("Verificado Correctamente!");
      }
    );

    //Ahora reaccionamos al mensaje con los emojis que recolectaremos (Esto es realmente opcional, pero lo recomiendo), en este caso serán solo una ✅ y una ❎.

    //Nota: El then después de la primera reacción es para que reaccione primero con ✅ y luego con  ❎ (Esto también es realmente opcional, pero lo recomiendo).

    // Ahora definimos el filtro de las reacciones que vaya, vamos a recolectar (Para que solo recolecte esas, en pocas palabras).

    // Nota: El filtro solo recolecta las reacciones que se hagan con los nombres de los emojis que están en el array (Al ser emojis Unicode, si es que se llaman así, no tienen nombre como tal, pero si es un emoji personalizado hay que usar el nombre del mismo) y solo si la reacción la hizo el autor del mensaje.

    const filter = (reaction, user) => {
      return (
        ["✅", "❎"].includes(reaction.emoji.name) &&
        user.id == message.author.id
      );
    };

    m.awaitReactions(filtro, { max: 1, time: 1000, errors: ["time"] }).catch(
      () => {
        // Vale, esto es lo que pasa si el usuario NO reacciono en el tiempo, esto es totalmente opcional. Si no quieren esto solo eliminen el catch.

        // Nota: Acá pueden usar un <canal>.send y literalmente todo, yo en mi caso estoy editando el mensaje incial.
        m.edit(
          "Verificate! Si No Lo Haces en 10 segundos se cansela y no puedes ser admin"
        );

        m.react("✅").then(() => {
          m.react("❎");
        });

        // Ahora sí, comienza el awaitReactions

        //Nota: max es el máximo de reacciones que recolectaremos, yo lo dejare en 1, time es el tiempo máximo para reaccionar, en mi caso yo lo dejare en 10000 que es igual a 10 segundos (El tiempo se mide en milisegundos) y errors lo dejamos así.

        m.awaitReactions(filtro, { max: 1, time: 10000, errors: ["time"] })
          .catch(() => {
            // Vale, esto es lo que pasa si el usuario NO reacciono en el tiempo, esto es totalmente opcional. Si no quieren esto solo eliminen el catch.

            // Nota: Acá pueden usar un <canal>.send y literalmente todo, yo en mi caso estoy editando el mensaje incial.
            m.edit(
              "No respondiste a tiempo y la solicitud de verificacion queda cancelada"
            );
          })
          .then(coleccionado => {
            const reaccion = coleccionado.first();

            // Si el autor reacciona en los 10 segundos, sucederán estas cosas:

            // Si el emoji es ✅:
            if (reaccion.emoji.name === "✅") {
              message.member.roles.add("739536257553531082");
              m.edit("Troliado no seras admin");

              // Pero si el usuario reacciona con ❎
            } else if (reaccion.emoji.name === "❎") {
              m.edit("Verificacion Canselada!");
            }
          });
      }
    );
  });
};
