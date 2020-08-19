module.exports = async (client, message, args, ops) => {
  let Canalvoz = message.member.voice.channel;
  if (!Canalvoz) {
    message.channel.send("No estoy en un canal de voz.");
  } else {
    message.channel
      .send("Dejando el canal de voz.")
      .then(() => {
        message.member.voice.channel.leave();
      })
      .catch(error => message.channel.send(error));
  }
};
