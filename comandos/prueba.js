const snekfetch = require("snekfetch");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  let user;
  if (message.mentions.users.size) {
    user = message.mentions.users.first();
  } else if (args.id) {
    user = await client.fetchUser(args.id);
  }
  if (!user) {
    return message.channel.send("ALV menciona a alguien");
  }

  let member = await client.utils.fetchMember(message.guild, user.id);
  if (
    message.author.id !== message.guild.ownerID &&
    message.member.highestRole.comparePositionTo(member.highestRole) <= 0
  )
    return client.log.info(
      client.i18n.error(message.guild.language, "lowerRole")
    );

  args.reason = args.reason.join(" ");

  let guildMemberModel = await message.client.database.models.guildMember.findOne(
    {
      attributes: ["warnings"],
      where: {
        userID: member.id,
        guildID: message.guild.id
      }
    }
  );

  if (!guildMemberModel.dataValues.warnings) {
    guildMemberModel.dataValues.warnings = [];
  }

  guildMemberModel.dataValues.warnings.push({
    reason: args.reason,
    executor: message.author.id,
    time: Date.now()
  });

  await message.client.database.models.guildMember.update(
    {
      warnings: guildMemberModel.dataValues.warnings
    },
    {
      where: {
        userID: member.id,
        guildID: message.guild.id
      },
      fields: ["warnings"]
    }
  );

  let guildModel = await message.client.database.models.guild.findOne({
    attributes: ["warnAction", "warnThreshold"],
    where: {
      guildID: message.guild.id
    }
  });

  if (
    guildModel &&
    guildModel.dataValues.warnAction &&
    guildMemberModel.dataValues.warnings.length >=
      guildModel.dataValues.warnThreshold
  ) {
    let action,
      actionMessage = "Warning threshold reached. Too many warnings!";
    guildModel.dataValues.warnAction = guildModel.dataValues.warnAction.toLowerCase();
    switch (guildModel.dataValues.warnAction) {
      case "kick":
        if (member.kickable) {
          await member.kick(actionMessage);
        }
        action = "Kicked";
        break;
      case "ban":
        if (member.bannable) {
          await member.ban(actionMessage);
        }
        action = "Banned";
        break;
      case "softban":
        if (member.bannable) {
          await member.ban(actionMessage);
          await message.guild.unban(member.id);
        }
        action = "Soft-Banned";
        break;
      default:
        break;
    }

    await message.channel
      .send({
        embed: {
          color: "RED",
          description: client.i18n.info(
            message.guild.language,
            guildModel.dataValues.warnAction,
            message.author.tag,
            user.tag,
            actionMessage
          ),
          footer: {
            text: `ID ${user.id}`
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });

    client.emit(
      "moderationLog",
      message.guild,
      message.author,
      guildModel.dataValues.warnAction,
      user,
      actionMessage
    );

    await member
      .send({
        embed: {
          color: "RED",
          title: `${action} from ${message.guild.name} Server`,
          fields: [
            {
              name: "Reason",
              value: actionMessage
            }
          ]
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  } else {
    await message.channel
      .send({
        embed: {
          color: "ORANGE",
          description: client.i18n.info(
            message.guild.language,
            "warn",
            message.author.tag,
            user.tag,
            args.reason
          )
        }
      })
      .catch(e => {
        client.log.error(e);
      });

    let DMChannel = await user.createDM();
    await DMChannel.send({
      embed: {
        color: "ORANGE",
        description: client.i18n.info(
          message.guild.language,
          "warnDM",
          message.author.tag,
          message.guild.name,
          args.reason
        )
      }
    }).catch(e => {
      client.log.error(e);
    });

    client.emit("moderationLog", message, this.help.name, user, args.reason);
  }
};
