module.exports = async (client, message, args, ops) => {
  message.delete()
  const mensaje = args.join(" ");
  const wumplus = client.emojis.cache.get("743945670410633227");
  message.channel.send(`${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}${wumplus}`);
};
