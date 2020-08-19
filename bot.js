// 24/7 Activity

const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Bot Code

const fs = require("fs");
const MeowDB = require("meowdb");
const niveles = new MeowDB({
  dir: __dirname,
  name: "nivelesUsuarios"
});
let coins = require("./coins.json");
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 3;
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
// El modulo fs se utiliza para leer los archivos y carpetas de un directorio:
let { readdirSync } = require("fs");

// Referenciamos nuestro archivo de configuración, ahora en JS:
client.config = require("./config.js");

//Creamos una colección para Discordjs llamada 'comandos':
client.comandos = new Discord.Collection();

// <-- AQUI EL CONTROLADOR DE COMANDOS: -->  comandos

// <-- CONTROLADOR DE COMANDOS: -->

//dentro de nuestro for llamamos a la carpeta comandos creada:
for (const file of readdirSync("./comandos/")) {
  //Esto condicion evitara que los archivos que no son archivos .js no coleccione:
  if (file.endsWith(".js")) {
    //Elimina los últimos tres caracteres nombre del archivo para
    //deshacerse de la extensión .js y solo quedarnos con el nombre del comando:
    let fileName = file.substring(0, file.length - 3);

    //Define una nueva varible 'fileContents' de la exportación del comando
    //dentro de la carpeta comandos:
    let fileContents = require(`./comandos/${file}`);

    //Agrega el nombre del comando a la colección client.commands con un
    //valor de sus exportaciones respectivas.
    client.comandos.set(fileName, fileContents);
  }
}

//dentro de nuestro for llamamos a la carpeta eventos creada:
for (const file of readdirSync("./eventos/")) {
  //Esto condicion evitara que los archivos que no son archivos .js no coleccione:
  if (file.endsWith(".js")) {
    //Elimina los últimos tres caracteres nombre del archivo para
    //deshacerse de lda extensión .js y solo quedarnos con el nombre del evento:
    let fileName = file.substring(0, file.length - 3);

    //Define una nueva variable 'fileContents' de la exportación del evento dentro de la carpeta eventos:
    let fileContents = require(`./eventos/${file}`);

    // Cuando el evento se activa o es solicitada exportamos la función con
    // el nombre del evento vinculada y tambien el parametro client.
    client.on(fileName, fileContents.bind(null, client));

    // Elimina la memoria caché del archivo requerido para facilitar la recarga y no
    // tener más memoria de la necesaria.
    delete require.cache[require.resolve(`./eventos/${file}`)];
  }
}

// <-- AQUI LA PROPIEDAD LOGIN: -->

/*
Para este ejemplo utilizaré el npm megadb
Instalación; npm i megadb --save

Recuerda que si este código te ha sido útil puedes darle like :D
*/


// ANTI-LINKS

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No LINKS, " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No LINKS, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No LINKS, " + message.author)
  }

// ANTI-INVITES

    const { ant } = require("./functions.js");
  client.on("message", async message => {
    if (message.author.bot) return;
if (message.member.hasPermission("MUTE_MEMBERS")) return;
    if (message.channel.id == 741517087410880523) return;
    if (ant(message.content.includes) === true) {
      await message.delete({ timeout: 100 });
      message.author.send(
        "**" + message.author.username + "** no se permiten invitaciones."
      );
    }
  });
  
// Client.On Message Events

  client.on("message", message => {
    if (message.content.includes === "nitro") {
      message.channel.send(
        "Escuche nitro ? https://discordapp.com/gifts/ABPji30QPX8EIwI4 Tomen Nitro xd"
      );
    }
  });

  client.on("message", message => {
    if (message.content.includes === "ch!donate") {
      const embed2 = new Discord.MessageEmbed()
        .setTitle(`No le dones a Chocolat Estos ogros si son mañosos`)
        .setImage(`https://i.ytimg.com/vi/Yyncj74yyIU/hqdefault.jpg`)
        .setColor(0x66b3ff)
        .setFooter(`xD`);
      message.channel.send(embed2);
    }
  });

  client.on("message", message => {
    if (message.content.includes === "#SiroParaAdmin") {
      message.channel.send("#SIROPARAADMIN");
    }
  });

  client.on("message", message => {
    if (message.content.includes === "#siroparaadmin") {
      message.channel.send("#SIROPARAADMIN");
    }
  });

  client.on("message", message => {
    if (message.content.includes === ":v") {
      message.channel.send("UY UN PAPULINCE");
    }
  });

// <-- PROPIEDAD LOGIN: -->

// Inicia sesión en Discord con el token definido en config.
client
  .login(client.config.token) //agregamos las promesas de la propiedad login.
  .then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`);
  })
  .catch(err => {
    //Si se produce un error al iniciar sesión, se le indicará en la consola.
    console.error("Error al iniciar sesión: " + err);
  });
});

//total f