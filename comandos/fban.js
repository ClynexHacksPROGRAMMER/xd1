const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000));
  } //Permisos para usar

  let user;
  if (message.mentions.users.size) {
    user = message.mentions.users.first();
  } else if (args.id) {
    user = await client.fetchUser(args.id);
  }
  if (!user) return message.channel.send("Mencione a Alguien!");

  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      `**${message.author.tag}** ha baneado a **${user.tag}** de este servidor.`
    )
    .setFooter("Que mala suerte eh");

  message.channel.send(embed);
};

//    setInterval(function() {

//    let clone = message.channel.clone({ name: undefined, reason: 'Needed a clone' });

//clone

//  }, 0);
