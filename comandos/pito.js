module.exports = (client, message, args) => {
  const Discord = require("discord.js"); //importamos discord.js

  //variables de usuarios
  let usuario = message.mentions.users.first();
  let autor = message.author;

  let decimal = Math.random() * 20 + 1; //acá obtenemos un número random del 1 al 20
  let numero = Math.floor(decimal); //acá le quitamos los decimales al número anterior

  if (!usuario) {
    //si no hay mención
    const embed = new Discord.MessageEmbed()
      .setTitle(`El Pito de ${autor.username} mide ${numero} centímetros`)
      .setImage(
        "https://lh3.googleusercontent.com/proxy/ToBJPQnGQrdlMh2GH5t3buD6EBnt4K8ZTobxKFJYWkt9a43QRgRaZOR1tfwTqY5YaY93YTQ8bSJVgSNd4dEL2wUHYlFI3r3cyYWAL1llDIYv7Sh1-FKMLP1KXwUWV_8AqDiHxPDevsahx-x1FaA1Yj0QgcfVCR4WoexsJRaK"
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setColor("RANDOM");
    message.channel.send(embed);
  } else {
    if (usuario == client.user)
      return message.channel.send("Si lo supieras O.o");
    if (usuario.bot)
      return message.channel.send("No puedes realizar esta acción!");
    const embed = new Discord.MessageEmbed()
      .setTitle(`El pito de ${usuario.username} mide ${numero} centímetros`)
      .setImage(
        "https://lh3.googleusercontent.com/proxy/ToBJPQnGQrdlMh2GH5t3buD6EBnt4K8ZTobxKFJYWkt9a43QRgRaZOR1tfwTqY5YaY93YTQ8bSJVgSNd4dEL2wUHYlFI3r3cyYWAL1llDIYv7Sh1-FKMLP1KXwUWV_8AqDiHxPDevsahx-x1FaA1Yj0QgcfVCR4WoexsJRaK"
      )
      .setFooter(usuario.tag, usuario.displayAvatarURL())
      .setColor("RANDOM");
    message.channel.send(embed);
  }
};
