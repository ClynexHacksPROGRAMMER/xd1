const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const discord = require("discord.js");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send("No tienes permitido esto.");

  const user = message.mentions.members.first();

  if (!user) return message.channel.send("A quien desmutearas ?");

  var muteRole = message.guild.roles.cache.find(r => r.name === "『🔇』Muted");

  if (!muteRole) return message.channel.send("No encuentro el rol de callados");

  await user.roles.remove(muteRole.id);

  message.channel.send(`${user} Esta desmuteado`);
};
