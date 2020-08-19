module.exports = async (client, message, args, ops) => {
  message.delete()
  const mensaje = args.join(" ");
  const wumplus = client.emojis.cache.get("740334524981968957");
  message.channel.send(`${wumplus} ${mensaje} ${wumplus}`);
};
