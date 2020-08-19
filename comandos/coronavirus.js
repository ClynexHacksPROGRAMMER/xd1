const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  try {
    let pais = args[0];
    if (!pais) return message.channel.send("Que pais weon ? necesito un pais");
    let res = await require("node-fetch")(
      `https://corona.lmao.ninja/v2/countries/${pais}`
    );
    let data = await res.json();
    let covid = new Discord.MessageEmbed()
      .setTitle(`🤕 Covid-19 En ${pais} 🤕`)
      .addField("😥 Casos 😥", data.cases.toLocaleString(), true) // Obtenemos la cantidad de casos de COVID-19
      .addField("😵 Casos hoy 😵", data.todayCases.toLocaleString(), true) // Obtenemos la cantidad de casos de COVID-19 nuevos hoy
      .addField("💀 Muertes 💀", data.deaths.toLocaleString(), true) // Obtenemos la cantidad de muertes por COVID-19
      .addField("☠ Muertes hoy ☠", data.todayDeaths.toLocaleString(), true) // Obtenemos la cantidad de muertes por COVID-19 hoy
      .addField("😪 Condición critica 😪", data.critical.toLocaleString(), true) // Obtenemos la cantidad de gente en Condición critica
      .addField("😀 Recuperados 😀", data.recovered.toLocaleString(), true) // Obtenemos la cantidad de gente que se ha recuperado
      .setColor("FF0000");
    message.channel.send(covid);
  } catch (e) {
    message.channel.send("Ha ocurrido un error!"); // De repente se cae la API, con este try catch evitaremos un error en caso de que se haya caído
  }
};
