module.exports = (client, message, args) => {
  let texto = args.join(" ");

  let prohibidos = ["", ""];

  // Si la ID del usuario estÃ¡ en la lista de IDS prohibidas:
  if (prohibidos.includes(message.author.id))
    return message.channel.send(
      "¡Geko te a prohibido usar este comando por mal usarlo!"
    );

  var rpts = [
    "Sí",
    "No",
    "¿Por qué?",
    "qsy",
    "Tal vez",
    "No sé",
    "Definitivamente?",
    " ¡Claro! ",
    " Sí ",
    " No ",
    " Por supuesto! ",
    " Por supuesto que no "
  ];
  if (!texto) return message.reply(`Escriba una pregunta.`);
  message.reply(
    " a su pregunta `" +
      texto +
      "` mi respuesta es: `" +
      rpts[Math.floor(Math.random() * rpts.length)] +
      "`"
  );
};
