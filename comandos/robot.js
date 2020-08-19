const Discord = require("discord.js");
const request = require("request-promise-native");
const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let string = args.length ? args.join(" ") : message.author.tag;

  let options = {
    url: `https://robohash.org/${encodeURIComponent(string)}?set=set0`,
    encoding: null
  };
  let response = await request(options);

  message.channel.send({
    files: [{ attachment: response }]
  });
};
