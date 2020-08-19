module.exports = async (client, message, args, ops) => {
  if (!message.member.roles.cache.has("742159635078709381"))
    return message.channel.send("Negativo!");
  if (message.member.roles.cache.has("742159635078709381"))
    return message.channel.send("Positivo!");
};
