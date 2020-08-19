const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  let { crearDB } = require("megadb"); //Llamamos al constructor crearDB
  let warns = new crearDB("warns"); //Creamos la db con el constructor crearDB

  let usuario =
    message.mentions.members.first() || message.guild.members.resolve(args[0]); //Declaramos usuario como el primer miembro que se haya mencionado, Si no se menciono a ninguno pasamos a obtenerlo por ID suponiendo que args[0] es una ID
  let razon = args[1] ? args.slice(1).join(" ") : "No fue especificada"; //Declaramos la razon del aviso, Utilizamos un operador ternario (condicional ? true : false) para comprobar si se especifico una, si devuelve true agarramos args[1] en adelante y si devuelve false la razÃÂÃÂ³n sera igual a 'No especificada'
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      "No tienes permisos para ejecutar este comando"
    ); //Verificamos si el miembro autor del mensaje tiene el permiso Gestionar mensajes
  if (!usuario) return message.channel.send("No has mencionado ningun usuario"); //Verificamos si se menciono o especifico la ID de un usuario
  if (razon.length > 1024)
    return message.channel.send(
      "La razon no puede exceder los 1024 caracteres"
    ); //Verificamos si la longitud de la razÃÂ³n es mayor a 1024 para evitar errores con el embed, La longitud mÃÂ¡xima varÃÂ­a de lo que Discord te permita en el mensaje, En este caso es 1024 porque lo utilizarÃÂ© en un field
  if (!warns.tiene(`${message.guild.id}.${usuario.id}`))
    warns.establecer(`${message.guild.id}.${usuario.id}`, 0); //Verificamos si la db no tiene datos guardados, En caso de que no tenga los establecemos
  warns.sumar(`${message.guild.id}.${usuario.id}`, 1); //Sumamos 1 al valor establecido previamente
  let embed = new Discord.MessageEmbed()
    .setTitle("Usuario avisado")
    .addField("Usuario:", `<@${usuario.id}>`)
    .addField("Autor de la sancion:", `<@${message.author.id}>`)
    .addField("Razon:", razon)
    .setColor("RANDOM");
  message.channel.send(embed); //Enviamos el embed
  usuario
    .send(
      `Hola! Vine a informarte que fuiste avisado en el servidor ${message.guild.name} por la razon: ${razon}`
    )
    .catch(e => e); //Enviamos un mensaje al usuario avisado y utilizamos .catch para evitar errores (DM desactivado por ejemplo)

  //Edit: En caso de querer obtener los warns del usuario utilizas;
  await warns.obtener(`${message.guild.id}.${usuario.id}`); //Claro esta que debes guardar datos en caso de que no los haya, en la lÃ­nea 9 de este cÃ³digo hay un ejemplo para eso.
};
