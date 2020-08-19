module.exports = (client, message, args) => {
  const Mensajes = [
    "Party parti EN PARTO (?",
    "Biza cuanto vale tu culo ?",
    "C.R.O SONRIE OMG XD",
    " Te quiero meter mi miembro( ͡° ͜ʖ ͡°)",
    "( ͡° ͜ʖ ͡°)╭∩╮",
    "Sun is down",
    "FVKING CUARENTENA ME TIENEN EN MI CASA ENCERRAO PERO NO TUVIERON EN CUENTA NO SE RESCATARON MI FLOW ESTA MUTANDO",
    "Sigues con el comando XD",
    "Sapito Facha",
    "Por weon"
  ];
  const alaetorio = Math.floor(Math.random() * Mensajes.length);
  message.channel.send(Mensajes[alaetorio]);
};
