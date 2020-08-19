module.exports = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.author.send(
      "¡Necesitas permiso de administrador para obtener un server vip!"
    );

  const Mensajes = [
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=43GTq19SoWNaIXq4thEZQ50y81CG9fr0#!/store",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=I0YepFWu4KfG8sRDAOzl2Z2QNQSLludx",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=JL-SoSInnuEl9K6AvSJENYo4aFmtx00S",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=wDtE3g4V7gWB8Zx0dA9W80XRJEocsEIp",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=OVTtBZXyH0kkc-hGElpCva81nNTyp4Q_",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=Ze_sGZ_gdv1PCKWBVHCpBSebhKllVexi",
    "**🚀| Toma tu server :** https://www.roblox.com/games/606849621/Jailbreak?privateServerLinkCode=mSkzx3yQblOCeShwRzDKhOo4SEq0gIEB"
  ];
  const alaetorio = Math.floor(Math.random() * Mensajes.length);
  message.channel.send(Mensajes[alaetorio]);
};
