module.exports = async (client, message, args) => {
  //importamos esto en cmd handler

  let invite = await message.channel.createInvite({
    maxAge: args.age * 60,
    maxUses: args.uses
  });

  await message.channel.send(
    "**Hola. Beep. Boop.**\n" +
      "**Si quieres invitar amigos a este servidor, comparte la siguiente invitación**" +
      " **link para tus amigos.**\n**Beep!**\n" +
      `https://discord.gg/${invite.code}`
  );
};
