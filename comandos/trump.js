const Discord = require("discord.js");
const marsnpm = require("marsnpm");
module.exports = async (client, message, args, ops) => {
  let trump = args.join(" ");
  let img = await marsnpm.trump(trump);
  message.channel.send({ files: [img] });
};
