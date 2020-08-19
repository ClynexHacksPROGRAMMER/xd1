module.exports = async (client, message, args, ops) => {
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("No tengo permisos");
  }

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("Perdon, pero no tienes permisos");
  }

  let persona = message.mentions.members.first();
  if (!persona)
    return message.channel.send("Debe mencionar a alguien para darle el rol");

  let nombrerol = args.slice(1).join(" ");
  if (!nombrerol)
    return message.channel.send("Escriba el nombre del rol a agregar");

  let rol = message.guild.roles.cache.find(r => r.name == nombrerol);

  if (!rol) {
    return message.channel.send("Rol no encontrado en el servidor");
  } else if (!rol.editable) {
    return message.channel.send(
      "Lo siento, pero no puedo darle ese rol a nadie, debido a que esta mas alto que mi rol"
    );
  } else if (rol.comparePositionTo(message.member.highestRole) > 0) {
    return message.channel.send(
      "Ese rol es mas alto que tu rol mas alto (en lo que a jerarquia se refiere), asi no puedes darselo a nadie"
    );
  }

  persona.roles.add(rol.id).catch(e => message.reply("Ocurrio un **error**"));
  message.channel.send(
    `Listo, le agrege el rol **${rol.name}** a **${persona.user.username}**`
  );
};
