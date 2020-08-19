module.exports = async (client, message, args, ops) => {
  let miembro = message.mentions.members.first();
  let nombrerol = args.slice(1).join(" ");

  let role = message.guild.roles.find("name", nombrerol);
  let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

  if (!perms)
    return message.channel.send(
      "`Error` `|` No tienes Permisos para usar este comando."
    );

  if (message.mentions.users.size < 1)
    return message.reply("Debe mencionar a un miembro.").catch(console.error);
  if (!nombrerol)
    return message.channel.send(
      "Escriba el nombre del rol a remover, `-removerol @miembro [rol]`"
    );
  if (!role) return message.channel.send("Rol no encontrado en el servidor.");

  miembro.removeRole(role).catch(console.error);
  message.channel.send(
    `El rol **${role.name}** del miembro **${miembro.user.username}** fue removido  correctamente.`
  );
};
