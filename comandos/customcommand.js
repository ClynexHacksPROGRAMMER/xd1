const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const msg = message;
  const langSet = msg.client.provider.getGuild(msg.guild.id, "language");
  const lang = require(`../../languages/${langSet}.json`);

  if (!args || args.slice().length === 0)
    return msg.reply(lang.createcustomcommand_noinput);
  if (args.slice(1).length === 0)
    return msg.reply(lang.createcustomcommand_nocommandanswer);
  if (
    msg.client.provider.getGuild(msg.guild.id, "premium").status === false &&
    msg.client.provider.getGuild(msg.guild.id, "customcommands").length >= 5
  )
    return msg.reply(lang.createcustomcommand_premiumneeded);

  for (
    let i = 0;
    i < msg.client.provider.getGuild(msg.guild.id, "customcommands").length;
    i += 1
  ) {
    if (
      msg.client.provider
        .getGuild(msg.guild.id, "customcommands")
        [i].name.toLowerCase() ===
      args
        .slice(0, 1)
        .join(" ")
        .toLowerCase()
    )
      return msg.reply(lang.createcustomcommand_already);
  }

  const newcommandsettings = {
    name: args
      .slice(0, 1)
      .join(" ")
      .toLowerCase(),
    creator: msg.author.id,
    commandanswer: args.slice(1).join(" "),
    descriptionOfTheCommand: "",
    embed: "false",
    commandCreatedAt: Date.now(),
    enabled: "true"
  };

  const currentCustomcommands = msg.client.provider.getGuild(
    msg.guild.id,
    "customcommands"
  );
  currentCustomcommands.push(newcommandsettings);
  await msg.client.provider.setGuild(
    msg.guild.id,
    "customcommands",
    currentCustomcommands
  );

  return msg.reply(lang.createcustomcommand_created);
};
