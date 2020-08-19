//command handler

const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  var randomstring = require("randomstring");
  if (!args[0])
    return message.channel.send("`Length is needed. Please retry command.`");
  if (args[0] > 2000)
    return message.channel.send(
      "Cannot generate password [DISCORD API ERROR: MUST BE 2000 IN LENGTH OR LOWER.]"
    );
  var a = randomstring.generate({
    length: args[0]
  });
  message.author.send(a);
  message.channel.send(
    "`Contraseña Generada. Revisa los Mensajes Del Privado`"
  );
};
