//Comando para crear palabras ascii en un markdown.

const Discord = require("discord.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = async (client, message, args, ops) => {
  let text = args.join(" ");
  if (!text)
    return message.channel.send(
      "Agrega algo para convertirlo en ascii. (Máximo 20 carácteres)"
    );
  if (text.length > 20)
    return message.channel.send("Solo se permite hasta 20 carácteres.");
  let letras = await figletAsync(text);
  message.channel.send("```" + letras + "```");
};
