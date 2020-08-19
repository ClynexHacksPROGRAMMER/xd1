
const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");


// Obtengo una de las imágenes por mención
module.exports = async (client, message, args, ops) => {
  
  var mensaje = args.slice(1).join(' ')

//Definimos el recordatorio para que de primer argumento sea el tiempo

function reminder() {
message.reply('Recuerda:\n' + mensaje)
}

/*
Acá usaremos switch. 

switch lo que hace es evaluar valores por medio de casos

switch nos ahorrará el tiempo de hacer:

if(args[0].slice(0, -1) === "s"){

} else if(args[0].slice(0, -1) === "m") {

}
 
etc

*/
switch (args[0].slice(-1)) {
case 's': {
if (args[0].slice(0, -1) > 60) return message.channel.send('No puede ser mayor de 60 segundos')
				var msDelay = args[0].slice(0, -1) * 1000
				message.reply('Acabas de establecer un recordatorio en ' + args[0].slice(0, -1) + ' segundos');
				setTimeout(reminder, msDelay);
				break
}
case 'm': {				if (args[0].slice(0, -1) > 60) return message.channel.send('No puede ser mayor de 60 minutos');
				var msDelay = args[0].slice(0, -1) * 60000;
				message.reply('Acabes de establecer tu recordatorio en ' + args[0].slice(0, -1) + ' minutos');
				setTimeout(reminder, msDelay);
				break
}
case 'h': {
if (args[0].slice(0, -1) > 24) return message.channel.send('No puede ser mayor de 24 horas');
				var msDelay = args[0].slice(0, -1) * 3600000;
				message.reply('Acabas de establecer tu recordatorio en ' + args[0].slice(0, -1) + ' horas');
				setTimeout(reminder, msDelay);
				break
}
default: {
				message.channel.send('Lo estas haciendo mal es:\n<1 - 60>s <recordatorio>\n<1 - 60>m <recordatorio>\n<1 -  24>h <recordatorio>\n ____Ejemplo:____\n```1m Recordar ir a sacar un perro```');
				break;
 }
}

/*
Agregamos un setTimeout para que después de que pase un tiempo predeterminado (en milisegundos) mande el recordatorio o el mensaje 



default lo que hace es que si no hubo ningún valor entre los establecidos mandara un mensaje por cómo dice defecto

tips : 
- Puedes hacer que mande el mensaje al autor, donde digas :

# el server = message.guild.name

# el canal = message.channel.name

# El tiempo 

y bueno ya te di la base si quieres agregarlo en un embed ya serían tus gustos 

Yo me puse unos filtros (condiciónales) donde no puede decir un numero mayor a, eso ya es opcional. 
*/
	
}