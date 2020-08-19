const fetch = require("node-fetch");// npm i node-fetch
const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
let name = args[0]
        if (!name) {
            return message.channel.send("> Ingrese el nombre de usuario")// Si el usuario no coloca el nombre de instagram enviarÃ¡ este mensaje
                
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("> No pude encontrar esa cuenta")// Si la cuenta de instagram no la encuentra enviarÃ¡ este mensaje
                
        }

        const account = res.graphql.user;//Definimos account

        const embed = new Discord.MessageEmbed()// Creamos el richEmbed
            .setColor(0xf7a7ff)// Color del embed
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Información", ` **Username:** ${account.username}
             **Nombre completo:** ${account.full_name}
             **Biografía:** ${account.biography.length == 0 ? "none" : account.biography}
             **Posts:** ${account.edge_owner_to_timeline_media.count}
             **Seguidores:** ${account.edge_followed_by.count}
             **Siguiendo:** ${account.edge_follow.count}
             **Cuenta privada:** ${account.is_private ? "Si" : "No"}`);

        message.channel.send(embed);// Envia el embed al canal
    }// Cerramos el comando