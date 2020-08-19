const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message, args, ops) => {
  try {
    let platform = args[2].toLowerCase();
    let region = args[1].toLowerCase();
    let tag = args[0];

    if (region != "us")
      if (region != "eu")
        if (region != "kr")
          if (region != "cn")
            if (region != "global") {
              const embed = new Discord.MessageEmbed()
                .setDescription(
                  "La región no fue encontrada, por favor prueba poniendo `us`, `eu`, `kr`, `cn` o `global`.\nUtilización: `!linkear <tag> <región> <plataforma>`. \nRecuerda que el tag es - y no el #"
                )
                .setColor(0x050000); //Color rojo del mensaje
              return message.channel.send({ embed });
            }

    if (platform != "pc")
      if (platform != "psn")
        if (platform != "xbl") {
          const embed = new Discord.MessageEmbed()
            .setDescription(
              "La plataforma no fue encontrada, por favor prueba poniendo `pc`, `psn` o `xbl`.\nUtilización: `!linkear <tag> <región> <plataforma>`. \nRecuerda que el tag es - y no el #"
            )
            .setColor(0x050000); //Color rojo del mensaje
          return message.channel.send({ embed });
        }

    client.msgs[message.author.username] = {
      region: region,
      tag: tag,
      platform: platform
    };

    const embed = new Discord.MessageEmbed().setDescription(
      `Listo **${message.author.username}**, tu cuenta ha sido linkeada con exito, muchas gracias.`
    );
    fs.writeFile(
      "../cuentas.json",
      JSON.stringify(client.msgs, null, 4),
      err => {
        if (err) throw err;
        message.channel.send(embed);
      }
    );
  } catch (err) {
    const embed = new Discord.MessageEmbed().setDescription(
      "Por favor, utilice el comando correctamente. `!linkear <tag> <region> <plataforma>`"
    );
    message.channel.send(embed);
  }
};
