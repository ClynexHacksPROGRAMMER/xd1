const { Client, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");
const weather = require("weather-js");
module.exports = async (client, message, args, ops) => {
  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (args.length < 1)
      return message.channel.send("¡Debes ingresar una localización válida!");

    var current = result[0].current;
    var location = result[0].location;

    const embed = new Discord.MessageEmbed()

      .setDescription("`" + current.skytext + "`")
      .setAuthor(`Estado climático en ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor("RANDOM")
      .addField("Zona Horaria", `GMT${location.timezone}`, true)
      .addField(
        "Temperatura",
        `${current.temperature} Grados ${location.degreetype}`,
        true
      )
      .addField("Viento", current.windspeed, true)
      .addField("Humedad", `${current.humidity}%`, true)
      .addField("Fecha", current.day + " " + current.date, true)
      .setFooter("Interesante el clima por haya ¿no?")
      .setTimestamp(new Date());

    message.channel.send(embed);
  });
};
