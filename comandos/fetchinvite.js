//No lo traducí otra vez
const Discord = require("discord.js");
module.exports = {
  run: async (bot, message, args) => {
    //Bueno..., quien sabe...
    if (message.deletable) message.delete();

    //Mandar instrucciones
    if (!args[1])
      return message.channel.send(
        "Uso: `fetchinvite <InviteResolvable>`\nUn InviteResolvable puede ser el código de invitación o su URL"
      );
    //Debemos manejar los errores, especialmente en fetchInvite, que será denegada cuando lo que hayamos puesto no es invitacion.
    try {
      //Recoger la información desde la API
      const invite = await bot.fetchInvite(args[1]);

      //Los embeds son bonitos, vamos a usarlos
      const embed = new Discord.MessageEmbed()
        .setTitle("Invite information")
        //.setDescription("The API doesn't give me as much information about a Discord invite")
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("RANDOM");

      //Si en caso esto viene de un servidor...
      if (invite.guild) {
        //Fijense que esos son los detalles que fetchInvite me dio.
        embed
          .setThumbnail(invite.guild.iconURL({ dynamic: true }))
          .addField(
            "Guild",
            invite.guild.name + "\n`" + invite.guild.id + "`",
            true
          )
          .addField("Guild Verification", invite.guild.verificationLevel, true)
          .addField("Presence Count", invite.presenceCount, true);
      } //Si proviene de un grupo MD
      else if (invite.channel.type === "group") {
        embed
          .setThumbnail(invite.channel.iconURL({ dynamic: true }))
          .addField("Type", "Group DM invite", true)
          .addField(
            "Group name",
            invite.channel.name ? invite.channel.name : "None",
            true
          );
      }
      embed.addField("Member Count", invite.memberCount, true);

      //Hay que ser ordenado en los fields
      if (invite.guild) {
        embed.addField(
          "Redirects to",
          invite.channel.name + "\n" + invite.channel.toString(),
          true
        );
      }
      embed.addField(
        "Inviter",
        invite.inviter
          ? invite.inviter.tag + "\n" + invite.inviter.toString()
          : "None",
        true
      );

      //A enviarlo
      message.channel.send(embed);
    } catch (err) {
      //Si fuera porque pusimos algo que no es invitación
      if (err.message === "Unknown Invite")
        return message.channel.send("The API says that invitation is unknown.");
      else
        return message.channel.send(
          "Something happened when I was trying to collect the information. Here's a debug: " +
            err
        );
    }
  },
  aliases: ["fi", "fthinv"],
  description:
    "Get the information from a Discord invite, using natural methods"
};
