module.exports = async (client, message, args, ops) => {
  message.delete()
  const mensaje = args.join(" ");
  const wumplus = client.emojis.cache.get("739646139581595769");
  message.channel.send(`${wumplus} ${mensaje}`);
};
