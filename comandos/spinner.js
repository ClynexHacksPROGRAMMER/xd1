const { Client, MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");
const Discord = require("discord.js");
const weather = require("weather-js");
const request = require("request-promise-native");
let activeChannels = [];
module.exports = async (client, message, args, ops) => {
  let spinning = await message.channel.send({
    embed: {
      color: "BLUE",
      description: `${message.author.tag} está girando un fidget spinner...`,
      image: {
        url: "https://i.imgur.com/KJJxVi4.gif"
      }
    }
  });

  let timeout = Math.random() * (60 - 5 + 1) + 5;
  setTimeout(() => {
    spinning
      .edit({
        embed: {
          color: "BLUE",
          description: `${
            message.author.tag
          }, giraste el fidget spinner por ${timeout.toFixed(2)} segundos.`
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }, timeout * 1000);
};
