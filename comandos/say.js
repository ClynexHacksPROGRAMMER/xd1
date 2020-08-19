module.exports = (client, message, args) => {
  message.delete();
  // Member doesn't have permissions
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000));
  }

  let texto = args.join(" ");
  if (!texto) return message.channel.send("Debe escribir un mensaje.");
  message.channel.send(texto);
};
