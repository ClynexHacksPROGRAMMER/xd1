module.exports = async (client, message, args, ops) => {
  if (!args) return message.channel.send("Ingrese nombre del rol.");
  let rol = message.guild.roles.find("name", args.join(" "));
  if (!rol) return message.channel.send("Rol no encontrado en el servidor.");
  let miembroroles = message.guild.roles.get(rol.id).members;
  message.channel.send(
    `Tienes a **${miembroroles.size}** miembro(s) con el rol **${args}**.`
  );
};
