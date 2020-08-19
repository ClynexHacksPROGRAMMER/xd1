const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");
const overwatch = require("overwatch-stats-api");

module.exports = async (client, message, args, ops) => {
  let texto = args
    .slice()
    .join(" ")
    .toLowerCase();
  const stats = await overwatch.getAllStats(
    client.msgs[message.author.username].tag,
    client.msgs[message.author.username].platform
  );
  const embed = new Discord.MessageEmbed().setColor(0x050000);

  if (texto == "tank") {
    embed.setTitle(`Ranked de ${stats.battletag} con TANK`);

    try {
      embed
        .setThumbnail(stats.rank.tank.tierIcon)
        .addField("Rank: ", stats.rank.tank.sr);
    } catch (err) {
      embed.addField("Rank: ", `No rankeado`);
    }
  }

  if (texto == "dps") {
    embed.setTitle(`Ranked de ${stats.battletag} con DPS`);

    try {
      embed
        .setThumbnail(stats.rank.damage.tierIcon)
        .addField("Rank: ", stats.rank.damage.sr);
    } catch (err) {
      embed.addField("Rank: ", `No rankeado`);
    }
  }

  if (texto == "supp" || texto == "support") {
    embed.setTitle(`Ranked de ${stats.battletag} con SUPPORT`);

    try {
      embed
        .setThumbnail(stats.rank.support.tierIcon)
        .addField("Rank: ", stats.rank.support.sr);
    } catch (err) {
      embed.addField("Rank: ", `No rankeado`);
    }
  }
  console.log(stats.rank);
  // console.log(stats.heroStats.quickplay.overall)
  message.channel.send(embed);
};
