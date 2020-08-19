module.exports = async (client, message, args, ops) => {
  if (!args) return message.channel.send("Ingrese nombre del rol.");
  let mirol = message.guild.roles.cache.find("name", args.join(" "));
  if (!mirol) return message.channel.send("Rol no encontrado en el servidor.");

  if (message.member.roles.has(mirol.id)) {
    message.channel.send("Si tienes el rol: `" + mirol.name + "`.");
  } else {
    message.channel.send("No tienes el rol: `" + mirol.name + "`.");
  }
};
