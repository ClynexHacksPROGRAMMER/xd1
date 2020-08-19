const { Client, MessageEmbed } = require("discord.js");

// Create an instance of a Discord client
const client = new Client();
const Discord = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const math = require("math-expression-evaluator"); // Este NPM es con el que se podrá hacer los calculos

  const embed = new Discord.MessageEmbed().setColor(`RANDOM`);

  if (!args[0]) {
    embed.setFooter("Por favor ingrese una `expresion`.");
    return await message.channel.send(embed); // Devuelve un mensaje si es que ejecuta el comando sin nada
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); // El Args toma el calculo
  } catch (e) {
    resultado = "error: Entrada Invalida"; // Cuando es incorrecta
  }
  embed
    .addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) // Te da el calculo
    .setTitle("📊 Calculadora")
    .addField("Salida", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send(embed);
}; // Finaliza el código
// Cualquier duda, lean la doc de la NPM
