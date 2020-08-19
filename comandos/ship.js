const snekfetch = require("snekfetch");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {

  let users = message.mentions.users.map(u => u.username);
  if (users.length < 2) {
    return message.channel.send("Menciona a 2 usuarios!");
  }

  let shippedName = "";
  for (let i = 0; i < users.length; i++) {
    shippedName += `${users[i].substring(0, users[i].length / 2)}`;
  }

  await message.channel.send({
    embed: {
      color: "BLUE",
      title: "Shipped Users",
      description: `${users.join(" + ")} = **${shippedName}**`
    }
  });
};
