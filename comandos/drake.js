
const { Client, MessageAttachment } = require("discord.js");

const client = new Client();
const Discord = require('discord.js');//definimos el modulo=> discord.js
const Canvas = require('canvas');//definimos el modulo=> canvas

module.exports = async (client, message, args, ops) => {
let mencionado = message.mentions.members.first() //mencionar a un user
if(!mencionado)return message.channel.send('Menciona a alguien')//mensaje q devuelve si no menciona a un user
	const canvas = Canvas.createCanvas(520, 524);//el tamaño de la imagen
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://www.huevadas.net/hacer/memes-y-graficos/uploads/memes/8b3ea56e890bbc74c912be4274323e1b/5wxmYT.jpg');//cargamos la imagen de drake
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//establecemos esa imagen como fondo

	const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));//cargamos el avatar nuestro
		const avatar2 = await Canvas.loadImage(mencionado.user.displayAvatarURL({ format: 'png' }));//cargamos el avatar del mencionado

	ctx.drawImage(avatar2, 261, 1, 258, 258);//aqui muestra la posicion y el tamaaño del avatar del mencionado
ctx.drawImage(avatar, 261, 261, 259, 264);//aqui muestra la posicion y el tamaaño del avatar nuestro
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'draake.png');//creamos el attachment

	message.channel.send(attachment);//mandamos la imagen
};