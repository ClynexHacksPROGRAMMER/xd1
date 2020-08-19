const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const discord = require("discord.js");
const ms = require("ms");

module.exports = async (client, message, args) => {
  if (!message.member.hasPermission("MUTE_MEMBERS"))
    return message.channel.send("No tienes permitido esto.");

  const user = message.mentions.members.first();

  if (!user) return message.channel.send("Bro vas a mutear al SCP-000 XD ?");

  var muteRole = message.guild.roles.cache.find(r => r.name === "『🔇』Muted");

  if (!muteRole)
    return message.channel.send(
      "No encuentro el rol de callados haz un rol llamado Muted"
    );

  var muteTime = args[1];

  if (!muteTime)
    return message.channel.send("Pon tiempo no voy a mutear 0 segundos");

  await user.roles.add(muteRole.id);

  message.channel.send(`${user} Esta muteado por ${muteTime}`);

  setTimeout(function() {
    user.removeRole(muteRole.id);

    message.channel.send(`${user} Esta desmuteado.`);
  }, ms(muteTime));
};
