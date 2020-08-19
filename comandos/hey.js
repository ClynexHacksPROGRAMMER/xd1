module.exports = (client, message, args) => {
  const Mensajes = [
    "Hola",
    "je :v",
    "Hola wap@ soy el señor bot ;V xd",
    "( ͡° ͜ʖ ͡°)",
    "( ͡° ͜ʖ ͡°)╭∩╮",
    ":v",
    "Tengo un truco de magia muy bueno, en el que si empieso a pensar en ella, me comienza a salir agua de los ojos",
    "Sigues con el comando :v"
  ];
  const alaetorio = Math.floor(Math.random() * Mensajes.length);
  message.channel.send(Mensajes[alaetorio]);
};
