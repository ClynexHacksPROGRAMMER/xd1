module.exports = (client, message, args) => {
  message.delete();
  // Member doesn't have permissions
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message
      .reply("Tu no puedes usar este comando....")
      .then(m => m.delete(5000));
  }

  let texto = `Alta facha tenes ${message.author}`;
  if (message.author.id == 728079616438173728)
    return message.reply("No tenes facha");
  if (message.author.id == 717075031485841458)
    return message.reply("Sos pelotudo");
  if (message.author.id == 719936844867043328)
    return message.reply("Aww Tu eres mas bonito que fachero");
  if (message.author.id == 632775917411762186)
    return message.reply("Sos el mas fachero de todos");
  if (message.author.id == 692567237910855750)
    return message.reply("Yo yo te amo :flushed:");
  message.channel.send(texto);
};
