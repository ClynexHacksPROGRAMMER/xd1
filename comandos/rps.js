const { Client, MessageEmbed } = require("discord.js");

const { promptMessage } = require("../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = async (client, message, args, ops) => {
  const embed = new MessageEmbed()
    .setColor("#ffffff")
    .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
    .setDescription("¡Añade una reacción a uno de estos emojis para jugar!")
    .setTimestamp();

  const m = await message.channel.send(embed);
  const reacted = await promptMessage(m, message.author, 30, chooseArr);

  const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

  const result = await getResult(reacted, botChoice);
  await m.clearReactions();

  embed.setDescription("").addField(result, `${reacted} vs ${botChoice}`);

  message.channel.send(embed);

  function getResult(me, clientChosen) {
    if (
      (me === "🗻" && clientChosen === "✂") ||
      (me === "📰" && clientChosen === "🗻") ||
      (me === "✂" && clientChosen === "📰")
    ) {
      return "You won!";
    } else if (me === clientChosen) {
      return "It's a tie!";
    } else {
      return "You lost!";
    }
  }
};
