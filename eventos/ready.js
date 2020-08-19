//Esta función se activara cuando el evento haya iniciado:
module.exports = async client => {
  // Esto va en nuestro evento ready

  // Comenzamos haciendo un setInterval, el tiempo del mismo se mide en milisegundos, en mi caso le pondré 60000 milisegundos que serian 1 minuto, es decir, cada minuto cambiara su estado.

  // Nota: En el tiempo no recomiendo poner menos de 1 minuto, ya que muchas interacciones con la Discord API en poco tiempo podrían ocasionar problemas como la regeneración de la token.

  setInterval(function() {
    // Comenzamos definiendo los estados en un array, separados por una coma cada uno. Aquí pondré solo 3.

    var estados = [
      "Creadores del bot : Loody, Etehcan y Thiago",
      "fm!help",
      "owo",
      "Solo me conocen por ser editor de pedro",
      "UWU",
      "Aña de la ñaña ñeñe ñaña ñiñi ñañe de ñaña",
      "Pantalla verde",
      "Etehcan el mas capo",
      "Loody el que tiene mas iq con 9 años",
      "Boosteen el servidor!",
      "ickkck",
      "Franqito el mejor",
      "Etehcan se la re come",
      "pipi",
      "AwA",
      "mimamamemima",
      "Etehcan es raider, baneenlo"
    ];

    // Ahora haremos un mathRandom para que escoja un elemento aleatoriamente del array (estados)

    let estado = estados[Math.floor(estados.length * Math.random())];

    // estado es el estado que se escogió aleatoriamente entre los 3 que conformaban el array, ahora haremos el setPresence para que ponga este estado en el estado del bot.

    // Nota: "status" es el estado que tendrá el bot (Sí, hay muchas cosas a la que nos referimos como "estados" pero acá me refiero a los estados como "Conectado", "No molestar" o "Ausente". En este caso está como "online", pero lo podemos poder en "dnd", "idle" o "invisible" y si queremos que el bot aparezca en modo de streaming, ponemos "stream" y abajo de name la url (url: "url")
    // Nota: "name" Es el nombre que tendrá el estado, lo dejamos como "estado" que el elemento aleatorio escogido del array.
    // Nota: "type" es el tipo de actividad (Jugando, leyendo, etc), si queremos que salga "Viendo" ponemos "WATCHING", si queremos que salga "Jugando" ponemos "PLAYING".

    client.user.setPresence({
      status: "online",
      activity: {
        name: estados[Math.floor(estados.length * Math.random())],
        type: "PLAYING"
      }
    });

    // Estos números son los milisegundos de los que les hable más arriba
  }, 5000);
};
