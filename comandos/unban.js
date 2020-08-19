const { MessageEmbed } = require("discord.js"),
  megadb = require("megadb"),
  opciones = new megadb.crearDB("opciones");

module.exports = async (client, user, guild) => {
  if (!opciones.has(`${guild.id}.logs`)) return; //si en la db opciones no hay un canal logs en el clave-split .logs
  let logchannel = await opciones.get(`${guild.id}.logs`); // obtiene la id del canal logs

  let robot = {
    true: "Si",
    false: "No"
  };
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return; //si el bot no tiene los permisos `VIEW_AUDIT_LOG` retornara a nada

  guild.fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" }).then(logs => {
    //obtiene los logs por el tipo `MEMBER_BAN_REMOVE` y despues crea la variable logs
    let userID = logs.entries.first().executor.id; //obtiene el ejecutor del primer AuditLog
    let userAvatar = logs.entries
      .first()
      .executor.displayAvatarURL({ dynamic: true }); //obtiene el avatar del ejecutor del primer AuditLog
    let msgChannel = new MessageEmbed()
      .setTitle("**Miembro desbaneado**")
      .setColor("RED")
      .setThumbnail(userAvatar)
      .addField("**Nombre :**", user.tag, true)
      .addField("**Se unio el :**", user.joinedAt.toDateString(), true)
      .addField("Bot?**", robot[user.bot], true)
      .addField("Por", `<@${user.id}>`, true)
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL({ dynamic: true }));
    let canal = client.channels.cache.get(logchannel); //obtiene el canal por la id que esta almacenada en el  clave-split .logs
    if (!canal) return; //si la id del canal no existe retornara a nada
    canal.send(msgChannel); //enviara el embed con el
  });
};
