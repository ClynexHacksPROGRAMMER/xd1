const snekfetch = require("snekfetch");

const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");
const fs = require("fs");
const puppeteer = require("puppeteer");
const os = require("os");

module.exports = async (client, message, args, ops) => {
  
let web = args.join (" ") //Obtenemos los argumentos de el comando (link)
 if (!web) return message.channel.send('**Porfavor pon el link de la pagina**');
 //Si web no existe mandara un error diciendo que no existe    

const browser = await puppeteer.launch({defaultViewport: {width: 1920, height: 1080}, 
args: ['--no-sandbox', '--disable-setuid-sandbox']});

const page = await browser.newPage(); //AbrirÃ¡ una pagina nueva en el browser
await page.goto(web); //Va a ir a la web que hemos puesto en los args
await page.screenshot({path: 'foto.png'}); 
//TomarÃ¡ Screenshot y guardarÃ¡ foto en /example.png
await browser.close(); //Cerramos el browser
message.channel.send(``, { files: ["foto.png"] }).catch(error =>  
                                                        
//Enviamos la foto al canal y si hay error lo enviarÃ¡ al canal igual

message.channel.send(error));
}
