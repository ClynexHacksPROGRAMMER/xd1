const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args) => {
  const Discord = require("discord.js");
  let categorias = [];
  let pagina = 1;

  //PÁGINAS:
  let pagina1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription("Moderacion")
    .addField("Ban", "Banear a un usuario del servidor incluye razon.", true)
    .addField("Clear", "Borra Mensajes", true)
    .addField("Noraid", "Banea a raiders que conoce el creador", true)
    .addField("Kick", "Patea a gente del srv", true)
    .addField("Fban", "Banea a alguien... OH ES BROMA :V", true)
    .addField(
      "Encuesta",
      "Haz una encuesta (MIEMBROS PUEDEN USAR EL COMANDO)",
      true
    )
    .addField("Banlist", "Lista de baneos", true)
    .addField("Members", "Cuantos miembros tiene mi server ?", true)
    .addField("Setprefix", "Cambia el prefix del bot en tu servidor", true)
    .addField("Warn", "Advierte a un usuario de algo", true)

    .setFooter("Página 1/4");

  let pagina2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription("Informacion")
    .addField(
      "Ping",
      "Comprueba la latencia del BOT con la API de discord",
      true
    )
    .addField("Avatar", "Muestra el avatar de un usuario", true)
    .addField("Serverinfo", "Muestra información de un servidor", true)
    .addField("Developers", "Quien ha hecho este bot !", true)
    .addField("Password", "Genera una contraseña", true)
    .addField("Coronavirus", "Estadisticas Del COVID-19", true)
    .addField("Servericon", "Icono del server", true)
    .addField("Calculadora", "Es una calculadora", true)
    .addField("Acortar", "Acorta un Link", true)
    .addField("Google", "Busca cosas en google", true)
    .addField("BuscarYT", "Busca un video de YT", true)
    .addField("Clima", "Mira el clima", true)
    .addField("Hexcolor", "Cual es el Color De un Hexcolor", true)
    .addField("Whois", "Quien es ?", true)
    .addField("Reportbug", "Reporta un bug!", true)
    .addField("Report", "Reporta un Usuario!", true)
    .setFooter("Página 2/4");

  let pagina3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription("Diversion !")
    .addField("Encuesta", "Realiza una encuesta", true)
    .addField("Spiderman", "Gif de spiderman", true)
    .addField("Sans", "Gif de sans Undertale", true)
    .addField("Temmie", "Gif de Temmie Undertale", true)
    .addField("Ascii", "Pasa a letra tipo Ascii", true)
    .addField("Hug", "Dejame que te abraze <3", true)
    .addField("RandomWiki", "Wikipedia Random", true)
    .addField("Hastebin", "Guarda un texto en hastebin !", true)
    .addField("Trump", "Pon tu texto en una imagen de trump!", true)
    .addField("Cat", "Aww :3 es mi pana miguel", true)
    .addField("Dog", "Awww :3", true)
    .addField("Work", "Trabaja !", true)
    .addField("8-ball", "Bola 8", true)
    .addField("Kill", "Mata a alguien 😵", true)
    .addField("Kiss", "Besa a alguien ❤", true)
    .addField("Cry", "Llora 😥", true)
    .addField("Ship", "Haz un ship mencionado 1 o 2 usuarios", true)
    .addField("Beer", "Salud 🍻", true)
    .addField("8-ball2", "Bola 8 pero otra version", true)
    .addField("Say", "El bot escribe y manda lo que escribes", true)
    .addField("Yodigo", 'El bot escribe "con tu nombre" lo que escribes', true)
    .addField("Meme", "Busca un meme y lo envia", true)
    .addField(
      "Meme2",
      "Busca un meme y lo envia (Usar si los memes son repetitivos)",
      true
    )
    .addField(
      "Sarcastic",
      "Transforma una frase a letras sarcasticas EJ : hOla",
      true
    )
    .addField("Temmie", "Gato en un terremoto", true)
    .addField("Hey", "Mensaje Random", true)
    .addField("Panda", "Aparesera un majestuoso panda", true)
    .addField("Hack", "Simula un Hackeo", true)
    .addField("Amenazar", "Amenaza a alguien", true)
    .addField("Buscaminas", "Juega a Buscaminas", true)
    .addField("Pescar", "Pesca algo", true)
    .addField("Aki", "Juega akinator", true)
    .addField("Minecraftlogro", "Crea un logro de minecraft", true)
    .addField("Love", "Mide el amor entre personas", true)
    .addField("Love2", "Mide el amor entre personas (v2)", true)
    .addField("Love2", "Mide el amor entre personas (v2)", true)
    .setFooter(`Página 3/4`);

  const paginas = [pagina1, pagina2, pagina3]; //LISTA DE PÁGINAS. (Aquí van los nombres de los embeds de arriba)

  let msg = await message.channel.send(pagina1);
  await msg.react("⏪"); //Baja hasta la primer página.
  await msg.react("◀️"); //Baja 1 página.
  await msg.react("❌"); //Cancela el comando.
  await msg.react("▶️"); //Sube 1 página.
  await msg.react("⏩"); //Sube hasta la última página.

  const atrasF = (reaction, user) =>
    reaction.emoji.name === "◀️" && user.id === message.author.id;
  const proximoF = (reaction, user) =>
    reaction.emoji.name === "▶️" && user.id === message.author.id;
  const inicioF = (reaction, user) =>
    reaction.emoji.name === "⏪" && user.id === message.author.id;
  const finF = (reaction, user) =>
    reaction.emoji.name === "⏩" && user.id === message.author.id;
  const eliminarF = (reaction, user) =>
    reaction.emoji.name === "❌" && user.id === message.author.id;

  const atras = msg.createReactionCollector(atrasF, { time: 120000 });
  const proximo = msg.createReactionCollector(proximoF, { time: 120000 });
  const inicio = msg.createReactionCollector(inicioF, { time: 120000 });
  const fin = msg.createReactionCollector(finF, { time: 120000 });
  const eliminar = msg.createReactionCollector(eliminarF, { time: 120000 });

  atras.on("collect", async function(r) {
    if (pagina === 1) return await r.remove(message.author);
    pagina--;
    await msg.edit(paginas[pagina - 1]);
    await r.remove(message.author);
  }); //Vuelve a la página de atrás.

  proximo.on("collect", async function(r) {
    if (pagina === paginas.length) return await r.remove(message.author);
    pagina++;
    await msg.edit(paginas[pagina - 1]);
    await r.remove(message.author);
  }); //Sube una página.

  inicio.on("collect", async function(r) {
    pagina = 1;
    await msg.edit(pagina1);
    await r.remove(message.author);
  }); //Vuelve al inicio.

  fin.on("collect", async function(r) {
    pagina = categorias.length;
    await msg.edit(pagina3); //Cambias el valor 'pagina3' si agregas más páginas.
    await r.remove(message.author);
  }); //Baja hasta la última página.

  eliminar.on("collect", async function(r) {
    await msg.delete().catch();
  }); //Borra el embed.
};
