module.exports = async (client, message, args, ops) => {
  const mensaje = args.join(" ");
  const wumplus = client.emojis.cache.get("743637715240747048");
  message.channel.send(`${wumplus} ${mensaje} ${wumplus}`);
};
