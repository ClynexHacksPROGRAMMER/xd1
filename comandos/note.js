//Más simple :), aún sin traducir
const Discord = require("discord.js");
//npm i --save meowdb
const MeowDB = require("meowdb");
//Creamos u obtenemos nuestra DB
const notes = new MeowDB({
  dir: __dirname,
  name: "notes"
});
(module.exports = async (client, message, args) => {
  //Formato: notes [<add> <note>]
  //notes [<remove/update> <id/all (sólo remove)>]
  //Argumentos. Si no hay argumentos, mostrar las notas
  if (args[0] === "add") {
    //Con esto podemos añadir nuevas notas a nuestro espacio en la DB.
    if (!args[1]) return message.channel.send("Añade Un Texto");
    //Si existe, actualizar los nuevos datos, sino, crearlo...
    if (notes.exists(message.author.id)) {
      const arr = notes.get(message.author.id);
      arr.push(
        args
          .slice(2)
          .join(" ")
          .replace(/(\r\n|\n|\r)/gm, " ")
      );
      notes.set(message.author.id, arr);
      message.channel.send("He añadido la nueva nota");
    } else {
      notes.create(message.author.id, [args.slice(2).join(" ")]);
      message.channel.send("He añadido la nueva nota");
    }
  } else if (args[0] === "remove") {
    //Remover nuestras notas
    if (notes.exists(message.author.id)) {
      if (!args[1])
        return message.channel.send(
          "Pon la ID de la nota o pon `all` para borrar todas las notas"
        );
      if (args[1] === "all") {
        //En caso de querer remover todo....
        notes.delete(message.author.id);
        message.channel.send("He borrado todas tus notas");
      } else {
        //Un número
        const arr = notes.get(message.author.id);
        let o = parseInt(args[2]);
        if (!o) return message.channel.send("ID Invalida");
        let i = o - 1;
        if (!arr[i]) return message.channel.send("La id de esa nota no existe");
        arr.splice(i, 1);
        notes.set(message.author.id, arr);
        message.channel.send("He borrado esa nota");
      }
    } else return message.channel.send("No tienes notas");
  } else if (args[0] === "update") {
    //Actualizar una nota
    if (notes.exists(message.author.id)) {
      if (!args[1])
        return message.channel.send("Pon la id de la nota que quieres editar");
      else {
        //Hay que ver si la ID de esa nota existe..
        const arr = notes.get(message.author.id);
        let o = parseInt(args[1]);
        if (!o) return message.channel.send("ID Invalida");
        let i = o - 1;
        if (!arr[i]) return message.channel.send("La ID de esa nota no existe");
        if (!args[2]) return message.channel.send("Añade un texto");
        arr[i] = args
          .slice(3)
          .join(" ")
          .replace(/(\r\n|\n|\r)/gm, " ");
        notes.set(message.author.id, arr);
        message.channel.send("He actualizado esa nota");
      }
    } else return message.channel.send("No tienes notas");
  } else {
    if (notes.exists(message.author.id)) {
      const arr = notes.get(message.author.id);
      if (!arr[0]) return message.channel.send("No tienes notas");
      let text = "";
      let i = 0;
      arr.forEach(r => {
        i++;
        text += i + ". " + r + "\n";
      });
      const embed = new Discord.MessageEmbed()
        .setTitle("Notes from " + message.author.username)
        .setDescription(text)
        .setColor("BLUE")
        .setFooter("Powered by Loody")
        .setTimestamp();
      message.channel.send(embed);
    } else return message.channel.send("No tienes notas");
  }
}),
  {};
