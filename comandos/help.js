const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  message.channel.send(
    "**" + message.author.username + "**, Revisa tus mensajes privados."
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Prefix")
    .addField("Prefix = @", "Prefix del bot", true);

  const embed2 = new Discord.MessageEmbed()
    .setTitle("Moderacion")
    .addField("Ban", "Banear a un usuario del servidor incluye razon.", true)
    .addField("Mute", "Mutea PERMAMENTEMENTE a un miembro.", true)
    .addField("Tempmute", "Mutea Temporalmente a un miembro.", true)
    .addField("Unmute", "Desmutea a un miembro.", true)
    .addField("Clear", "Borra Mensajes", true)
    .addField("Noraid", "Banea a raiders que conoce el creador", true)
    .addField("Sort", "Este comando es para hacer sorteos", true)
    .addField("Kick", "Patea a gente del srv", true)
    .addField("Fban", "Banea a alguien... OH ES BROMA XD", true)
    .addField(
      "Encuesta",
      "Haz una encuesta (MIEMBROS PUEDEN USAR EL COMANDO)",
      true
    )
    .addField("Banlist", "Lista de baneos", true)
    .addField("Members", "Cuantos miembros tiene mi server ?", true)
    .addField("Setprefix", "Cambia el prefix del bot en tu servidor", true)
    .addField("Warn", "Advierte a un usuario de algo", true)

    .setFooter("Version 1.1.0", client.user.displayAvatarURL())
    .setColor(0x66b3ff);

  message.author.send(embed);

  message.author.send(embed2);

  const embed3 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle("Informacion")
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
    .addField("BuscarYT", "Busca un video de YT", true)
    .addField("Clima", "Mira el clima", true)
    .addField("Hexcolor", "Cual es el Color De un Hexcolor", true)
    .addField("Whois", "Quien es ?", true)
    .addField("Reportbug", "Reporta un bug!", true)
    .addField("Google", "Busca cosas en google", true)
    .addField("Report", "Reporta un Usuario!", true)
    .setFooter("Version 1.1.0", client.user.displayAvatarURL());
  message.author.send(embed3);

  const embed4 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle("Diversion !")
    .addField("Encuesta", "Realiza una encuesta", true)
    .addField("Spiderman", "Gif de spiderman", true)
    .addField("Sans", "Gif de sans Undertale", true)
    .addField("Temmie", "Gif de Temmie Undertale", true)
    .addField("Ascii", "Pasa a letra tipo Ascii", true)
    .addField("RandomWiki", "Wikipedia Random", true)
    .addField("Hastebin", "Guarda un texto en hastebin !", true)
    .addField("Marry", "Casate", true)
    .addField("Trump", "Pon tu texto en una imagen de trump!", true)
    .addField("Cat", "Aww :3 es mi pana miguel", true)
    .addField("Dog", "Awww :3", true)
    .addField("Work", "Trabaja !", true)
    .addField("8-ball", "Bola 8", true)
    .addField("Hug", "Dejame que te abraze <3", true)
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
    .addField("Figlet", "Convierte algo en ascii", true)
    .addField("Arte (MENCION)", "ARTE APRECIENLO !", true)
    .addField("Basura (MENCION)", "Wow esto es basura", true)
    .addField("Bob (MENCION)", "Que haces pintando mi avatar bob ?", true)
    .addField("Eyes", "Diferentes textos con imagenes de un ojo", true)
    .addField("Olvido (MENCION)", "Te he olvidado :c", true)
    .addField("Bart (MENCION)", "Quisiera tenerte en mis brazos ;c", true)
    .addField(
      "Gru",
      "Creo una base de datos ! , Uso JSON !, Se corrompe el archivo !, Se corrompe el archivo 😪",
      true
    )
    .addField("Hack", "Simula un Hackeo", true)
    .addField("Amenazar", "Amenaza a alguien", true)
    .addField("Buscaminas", "Juega a Buscaminas", true)
    .addField("Pescar", "Pesca algo", true)
    .addField("Dab", "DAAAB", true)
    .addField("Aki", "Juega akinator", true)
    .addField("Minecraftlogro", "Crea un logro de minecraft", true)
    .addField("Love", "Mide el amor entre personas", true)
    .addField("Love2", "Mide el amor entre personas (v2)", true)
    .addField("Love2", "Mide el amor entre personas (v2)", true)
    .setFooter("Version 1.1.0", client.user.displayAvatarURL());
  message.author.send(embed4);

  const embed5 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle("Musica")
    .addField(
      "Play (link de musica xd)",
      "Reproduce un video en un canal de voz",
      true
    )
    .addField(
      "Leave",
      "Hasta la proxima (*sonido de que se va del canal de voz*)",
      true
    )
    .setFooter("Version 1.1.0", client.user.displayAvatarURL());
  message.author.send(embed5);
};
