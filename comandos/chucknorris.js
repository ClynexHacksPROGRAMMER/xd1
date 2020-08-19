const { Client, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const { Command } = require("discord.js-commando");

module.exports = async (client, message, args, ops) => {
  // thanks to https://api.chucknorris.io
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
        .setColor("#E41032")
        .setTitle("Chuck Norris Fact")
        .setDescription(json.value)
        .setURL("https://api.chucknorris.io");
      return message.channel.send(embed);
    })
    .catch(err => {
      message.channel.send("An error occured, Chuck is investigating this!");
      return console.error(err);
    });
};

//    setInterval(function() {

//    let clone = message.channel.clone({ name: undefined, reason: 'Needed a clone' });

//clone

//  }, 0);
