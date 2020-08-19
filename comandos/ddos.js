const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let usuario = message.mentions.members.first(); // Sirve para que tengan que mencionar a un usuario.
  if (usuario == client.user)
    return message.channel.send("A mi no me ddosees xd");
  if (!usuario)
    return message.channel.send(`Debes mencionar a alguien para ddosearlo.`);
  const ips = [
    "192.132.14.1.0",
    "181.121.9.1.0",
    "131.111.8.1.0",
    "121.110.4.1.0",
    "110.100.3.1.0",
    "255.145.92.1.0",
    "123.183.91.1.0",
    "992.123.32.1.1 : ⛔ VPN",
    "994.122.12.1.2: ⛔ VPN"
  ]; //Estos son la lista de correos (las extensiones)

  let randomips = Math.floor(Math.random() * ips.length); // Haciendo que los correos sean random.

  const tamañodepaquetes = [
    "5",
    "1381294129471294175981275113812941294712941759812751123123",
    "124129041209410",
    "13481208923712",
    "129841248",
    "1",
    "1381294129471294175981275113812941294712941759812751",
    "13812941294712941759812751"
  ];

  let randompaquetestamaño = Math.floor(Math.random() * tamañodepaquetes.length); // Haciendo que las variables de las contraseÃÂ±as sean random

  const paquetes = [
    "12348912049812089412412123123125416111109284612461248971291",
    "1234891204981208941241212312312541611110928461246124897129112348912049812089412412123123125416111109284612461248971291"
  ]; // La lista de los caracteres que se le agregarÃÂ¡n a la contraseÃÂ±a. Puedes agregar mas, los caracteres son los que tu quieras poner

  let paquetesrandom = Math.floor(
    Math.random() * paquetes.length
  ); // Haciendo que lo que se agregarÃÂ¡ a la contraseÃÂ±a sea random

  const queseyo = [
    `${paquetes[paquetesrandom]}`,
    `${paquetes[paquetesrandom]}`
  ]; // Creando las variables de las contraseÃÂ±as.

  let randomqueseyo = Math.floor(Math.random() * queseyo.length); // Haciendo que las variables de las contraseÃÂ±as sean random

  message.channel
    .send(
      new Discord.MessageEmbed()
        .setTitle(`DDoSeando a ${usuario.user.tag}`)
        //    .setImage(ImagenAMostrarAntesDeEditarMensaje) Puedes aÃÂ±adir una imagen que cargarÃÂ¡ antes de editar el mensaje
        .setColor("#8892fd")
    )
    .then(
      m => {
        const embed2 = new Discord.MessageEmbed()
          .setTitle(`Datos de DDoS a ${usuario.user.tag}`)
          .addField("IP:", ips[randomips])
          .addField("Paquetes enviados:", queseyo[randomqueseyo])
          .addField("Tamaño de paquetes:", paquetes[randompaquetestamaño])
          .setColor("#40c452");
        setTimeout(() => {
          m.edit(embed2);
        }, 1000);
      } // Embed con los resultados y 1 segundo para editar mensaje.
    );
};
