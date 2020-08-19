const { Client, MessageEmbed } = require("discord.js");
// Create an instance of a Discord client
const Discord = require("discord.js");
const client = new Client();


client.on("guildMemberAdd'", member => {

  const welcome = new Discord.MessageEmbed() 
///consejo pueden poner .setTitle("Hola " + member.user.username) para decir el nombre
//Resultado: Hola (El Nombre Del Usuario)

// o tambien .setTitle("hola"+ member.user.username + "A Mi Servidor")
//resultado: hola (El Nombre Del Usuario) A Mi Servidor

  .setTitle("texto de bienvenida")
///en .setColor() Dejen El 0x ejemplo: 0x39ff14, despues del ///0x ponen el hex del color
	.setColor("0x(Y El Hex Del Color Sin El #)")
  .setDescription("descripcion")
  .setImage("la url de la imagen(opciona)")                                                                                         

  client.channels.cache.get("734841549258621080").send(welcome)
///Opcional

});