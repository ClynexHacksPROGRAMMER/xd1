module.exports = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.author.send(
      "¡Necesitas permiso de administrador para obtener un server vip!"
    );

  const Mensajes = [
    "**💸| Toma tu kit :** https://mega.nz/file/GCgHkQ5Y#Mwen3gtWVzIfVjZyVuKDvdQACssyxOJUlz70f2hTam0 **|** https://www.mediafire.com/file/mlxlanf59asf7vd/KitAlter_OP.zip/file"
  ];
  const alaetorio = Math.floor(Math.random() * Mensajes.length);
  message.channel.send(Mensajes[alaetorio]);
};
