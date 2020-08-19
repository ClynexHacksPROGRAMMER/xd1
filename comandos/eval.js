const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => { 

        let toEval = args.join(" ") //Definimos toEval con argumentos
        if(!toEval) { //Creamos un if para que diga
            let embed = new Discord.MessageEmbed()
            .setDescription("Necesitas evaluar __*ALGO*__")
            .setColor("RANDOM")
            message.channel.send(embed)
            .then(m => m.delete(1000))
        }
        try { //Hacemos un try
         if(args.join(" ").toLowerCase().includes("token")){
             return;
        }
        let evaluated = eval(toEval) //"evaluated" va a evaluar el comando
       
        let beautify = require("beautify") //Se usa beautify para que funcione
        let embed = new Discord.MessageEmbed() //Creamos otro embed
        .setColor("RANDOM")
        .setTimestamp() //Usamos un Timestamp
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle(":desktop: FranquitoM BOT")
        .setDescription("Este comando sirve para ejecutar codigos")
        .addField("Codigo:", "```js\n"+beautify(args.join(" "), { format: "js" })+"```")
        .addField("Lo evaluado:", "```js\n"+evaluated+"```") //Aca aparecera lo que se evalua
        message.channel.send(embed)
    } catch(err) { //Hacemos un catch y que defina err
        let beautify = require("beautify")
       let embed2 = new Discord.MessageEmbed()
       .setTimestamp()
       .setFooter(client.user.username, client.user.displayAvatarURL)
       .addField("Hubo un error con el codigo que evaluaste", "```js\n"+err+"```") //Va a aparecer el error
       .setColor("RANDOM")
       message.channel.send(embed2) 
    }
}