module.exports = async (client, message) => {
  //Este comando esta hecho en command handler, entonces exportamos usando "module.exports"
  let server = client.guilds.get("734829513799761980"); //Definimos "server" para obtener los datos del server de la iD puesta
  let contador = server.memberCount; //Incorporamos la funcion .memberCount con "server" para obtener los mensajes
  message.channel.send("Este server posee " + contador + "miembros en total"); //Mensaje en donde el bot muestra los usuarios del server
};
