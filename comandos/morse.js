const Discord = require('discord.js');
const morse = require('morse');

module.exports = async (client, message, args, ops) => {

  // Condicionaremos que si el usuario no manda ningun argumento. O sea solo escribe el comando. *
  if(!args[0]) return message.channel.send("Opciones: `de` (Decifrar un codigo morse) o `en` (Cifra un codigo morse)").then(m => m.delete({timeout: 10000})) //El .then() es opcional, yo siempre lo agrego porque me gusta.

  // Haremos una declaracion en matriz con las diferentes opciones ya dichas.
  let Options = ["de", "en"]
  // Condicionamos la matriz con el metodo .includes() que nos va a determinar si lo que mandamos esta dentro de la matriz, si es si no devolvera true sino false.
  if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!")

  // Declaramos la variable de texto
  let texto = args.slice(1).join(" ")

  //Ahora empezamos a obtener las cosas de la matriz y condicionamos..

  //Si args[0] es igual a <de o en>
  if(args[0] == "de") {

    //Declaramos la variable "decode" aplicando el metodo .decode() del npm morse.
    let decode = morse.decode(texto);
    
    //Si el usuario no ha escrito ningun texto a decifrar que nos retorne algo
    if(!texto) return //message.channel.send("Escribe algo a decifrar") //Opcional agregar el mensaje, podemos solamente hacer que retorne.

    //Enviamos el mensaje decifrado...
    message.channel.send(decode)

  } else if(args[0] == 'en') {

    let encode = morse.encode(texto);
    message.channel.send(encode)

  }

}

