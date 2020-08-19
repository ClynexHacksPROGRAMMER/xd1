const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();

module.exports = async (client, message, args, ops) => {
  let bannedUsers = await message.guild.fetchBans(true);

  if (!bannedUsers.size) {
    return await message.channel.send({
      embed: {
        color: "GREEN",
        description:
          "Los miembros de su servidor se ven bastante decentes. ¡Nadie ha sido baneado aún!"
      }
    });
  }

  let noOfPages = bannedUsers.size / 10;
  let i = args.page > 0 && args.page < noOfPages + 1 ? args.page : 1;
  i = i - 1;

  let bannedUsersList = [];
  for (let bannedUser of bannedUsers.values()) {
    bannedUsersList.push({
      name: `${bannedUser.user.username}#${bannedUser.user.discriminator} / ${bannedUser.user.id}`,
      value: bannedUser.reason || "Ninguna razón dada"
    });
  }
  bannedUsersList = bannedUsersList.slice(i * 10, i * 10 + 10);

  await message.channel.send({
    embed: {
      color: "ORANGE",
      title: "Usuarios baneados",
      description: `Usuarios baneados de ${message.guild.name}`,
      fields: bannedUsersList,
      footer: {
        text: `Pagina: ${i + 1} de ${
          noOfPages > parseInt(noOfPages)
            ? parseInt(noOfPages) + 1
            : parseInt(noOfPages)
        }`
      }
    }
  });
};
