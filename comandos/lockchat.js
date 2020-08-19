/*Un comando simple para bloquear los canales de un server ya sea para evitar grifeos o por spam de usuarios*/


const Discord = require('discord.js')  //Requerimos de Discord para crear un MessageEmbed


	module.exports = async (client, message, args, ops) => {

//Empezamos con el comando


var permisos = message.member.hasPermission("ADMINISTRATOR") //Requerimos de permisos para poder ejecutar el comando

if(!permisos) return message.channel.send("No tienes permisos para ejecutar este comando") //Retornamos si el usuario no tiene los permisos definidos anteriormente

		let aceptenmeelcodepls = message.guild.roles.cache.find(rolstaff => rolstaff.name === '『⚙』Staff')//Cramos un let aceptenmeelcodepls para buscar un rol en el servidor

		let alluser = message.guild.roles.cache.find(aus => aus.name === '『👤』Miembro')//Creamos otro let alluser donde buscaremos el rol @everyone
    
    let Vip = message.guild.roles.cache.find(aus => aus.name === '『🔒』VIP')//Creamos otro let alluser donde buscaremos el rol @everyone
    
    let colaborador = message.guild.roles.cache.find(aus => aus.name === '『💖』Colaborador')//Creamos otro let alluser donde buscaremos el rol @everyone

    let millonarios = message.guild.roles.cache.find(aus => aus.name === '『💰 』 Millonario')//Creamos otro let alluser donde buscaremos el rol @everyone
    
    let casino_master = message.guild.roles.cache.find(aus => aus.name === '『✨』Casino Master')//Creamos otro let alluser donde buscaremos el rol @everyone
    
		if(!message.member.hasPermission("ADMINISTRATOR") )return message.reply(':no_entry_sign: **| No tienes permisos Suficientes!**');//Colocamos los permisos

		message.channel.updateOverwrite(alluser, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });//Re escribimos los permisos del rl @everyone para que no puedan leer ni enviar mensajes

    message.channel.updateOverwrite(Vip, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });//Re escribimos los permisos del rl @everyone para que no puedan leer ni enviar mensajes

    message.channel.updateOverwrite(colaborador, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });//Re escribimos los permisos del rl @everyone para que no puedan leer ni enviar mensajes

    message.channel.updateOverwrite(millonarios, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });//Re escribimos los permisos del rl @everyone para que no puedan leer ni enviar mensajes
    
    message.channel.updateOverwrite(casino_master, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });//Re escribimos los permisos del rl @everyone para que no puedan leer ni enviar mensajes

    	message.channel.updateOverwrite(aceptenmeelcodepls, { READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true });//Re escribimos los permisos del rol de su servidor para que puedan leer y enviar mensajes

    	const canalblock = new Discord.MessageEmbed() //Creamos un nuevo embed llamado canalblock

        	.setDescription("Chat bloqueado!") //Definimos la descripción

        	.setColor('#4bbf5c') //Definimos el color del embed

    	message.channel.send(canalblock); //Enviamos el embed al canal

//Terminamos el comando

	}