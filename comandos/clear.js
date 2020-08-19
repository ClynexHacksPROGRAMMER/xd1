module.exports = async (client, message, args, ops) => {
  message.delete()
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000));
  }

  // Check if args[0] is a number
  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message
      .reply(
        "Sí ... ¿Eso no es un número? Por cierto, tampoco puedo eliminar 0 mensajes."
      )
      .then(m => m.delete(5000));
  }

  let deleteAmount;

  if (parseInt(args[0]) > 100) {
    deleteAmount = 100;
  } else {
    deleteAmount = parseInt(args[0]);
  }

  message.channel
    .bulkDelete(deleteAmount, true)
    .then(deleted =>
      message
      .reply(`Haz borrado \`${deleted.size}\` Mensajes.`)
      .then(m => m.delete(5000))
    )
    .catch(err => message.reply(`Something went wrong... ${err}`));
};
