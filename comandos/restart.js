const { Client, MessageEmbed } = require("discord.js");

const client = new Client();

module.exports = async (client, message, args, ops) => {
  if (!message.author.id == 678275999812550676) return;
  client.destroy(); //termina la conexión a Discord y destruye al cliente
  process.exit(0); //termina el proceso sin errores
  client.login(client.config.token); // Inicia el bot otra vez
};
