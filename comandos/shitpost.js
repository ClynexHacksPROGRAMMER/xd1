const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const Shitpost = [
    "https://media.discordapp.net/attachments/719626484419002418/722931145125134596/168D84C2-369A-42F7-91C6-53D54779A5CB.png",
    "https://media.discordapp.net/attachments/719626484419002418/722931145830039632/20200616_113657.jpg?width=643&height=635",
    "https://media.discordapp.net/attachments/719626484419002418/722931151936684042/FB_IMG_1592080768040.jpg?width=637&height=635",
    "https://media.discordapp.net/attachments/719626484419002418/722931154277236736/image0-5.png?width=647&height=635",
    "https://media.discordapp.net/attachments/719626484419002418/722931154919096370/image0-30.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931156210679869/IMG-20200614-WA0012.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931158467346452/IMG-20200616-WA0003.png",
    "https://media.discordapp.net/attachments/719626484419002418/722931160480481310/isticker_1591464740151.png",
    "https://media.discordapp.net/attachments/719626484419002418/722931161122471996/Screenshot_2020-06-10-16-58-50-678.jpeg",
    "https://media.discordapp.net/attachments/719626484419002418/722931162686947488/Screenshot_20200603-225045_1.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931164268199966/Screenshot_20200616-232336_Reddit.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931167153881239/Screenshot_20200616-234215_Reddit.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931196899753994/Screenshot_20200617-000214_Reddit.jpg?width=636&height=635",
    "https://media.discordapp.net/attachments/719626484419002418/722931201089863690/Screenshot_20200617-000425_Reddit.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931199370330143/Screenshot_20200617-000412_Reddit.jpg",
    "https://media.discordapp.net/attachments/719626484419002418/722931202750677012/Screenshot_20200617-000738_Reddit.jpg?width=602&height=635",
    "https://media.discordapp.net/attachments/719626484419002418/722931203518234684/unknown.png",
    "https://media.discordapp.net/attachments/719626484419002418/722931205841879220/unnamed.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742765759226445824/Screenshot_20200605-000533.png",
    "https://media.discordapp.net/attachments/656961746157699082/742765965300727858/IMG_20200715_162839.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742764739545006100/Screenshot_20200619-123753.png",
    "https://media.discordapp.net/attachments/656961746157699082/742763571523616768/20200811_050415.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742766391974690836/PicsArt_07-27-07.png",
    "https://media.discordapp.net/attachments/656961746157699082/742763145612886086/PSX_20200725_140358.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742763123508903987/EfIxmbOXgAAg8bv.png?width=311&height=657",
    "https://media.discordapp.net/attachments/656961746157699082/742762901185757186/IMG-20200326-WA0013-1.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742762062870216815/o_k2-1.jpg",
    "https://media.discordapp.net/attachments/656961746157699082/742761580319735868/Screenshot_2020-06-24-20-04-11-166.jpeg?width=574&height=657",
    "https://media.discordapp.net/attachments/712340014717206630/742587036258533426/IMG_20200716_142743.jpg?width=1168&height=657",
    "https://media.discordapp.net/attachments/712340014717206630/742587036564717701/5e7c190e662d3.png",
    "https://media.discordapp.net/attachments/712340014717206630/742587036833415279/IMG-20200809-WA0091.jpg?width=645&height=657",
    "https://media.discordapp.net/attachments/712340014717206630/742593352788213800/el_chiste.png",
    "https://media.discordapp.net/attachments/712340014717206630/742593441212661840/IMG_20200810_160531.jpg?width=529&height=657",
    "https://media.discordapp.net/attachments/712340014717206630/742593634804826183/image0.png",
    "https://media.discordapp.net/attachments/712340014717206630/742594534189563945/20200810_230234_0000.png?width=464&height=656",
    "https://media.discordapp.net/attachments/675112663348543498/736994822069551207/IMG_20200726_121133.jpg",
    "https://media.discordapp.net/attachments/675112663348543498/737040536220860476/post_alcalibre_20200726_214911_0.jpg?width=657&height=657",
    "https://media.discordapp.net/attachments/675112663348543498/737040571838889994/pikaroposting_20200726_215849_0.jpg?width=657&height=657",
    "https://media.discordapp.net/attachments/675112663348543498/737427356154593430/FB_IMG_1595886758935.jpg",
    "https://media.discordapp.net/attachments/675112663348543498/738519845074632734/IMG_20200730_171343.jpg?width=665&height=657",
    "https://cdn.discordapp.com/attachments/739658279520567377/742848432510599199/IMG_20200805_181211.jpg",
    "https://media.discordapp.net/attachments/675112663348543498/738565482331897856/image0.jpg"
  ]; //Para añadir mas imagenes pon ,"LINKDELAIMAGEN" y ya xd

  const mathrandom = Math.floor(Math.random() * Shitpost.length);

  var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(Shitpost[mathrandom]);
  message.channel.send(embed);
};
