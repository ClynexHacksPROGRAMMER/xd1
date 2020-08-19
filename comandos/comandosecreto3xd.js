const Discord = require("discord.js");

const { Client, MessageEmbed } = require("discord.js");

module.exports = async (client, message, args, ops) => {
  const Lolis = [
    "https://konachan.com/sample/36b3912f9a1554598d739fccfc3bab31/Konachan.com%20-%20312923%20sample.jpg",
    "https://konachan.com/jpeg/fe1545c1f55a3a73ac52e1c88fbd40b7/Konachan.com%20-%20312905%20blonde_hair%20blush%20breasts%20long_hair%20nipples%20open_shirt%20orange_eyes%20original%20panties%20school_uniform%20shirt%20skirt%20tie%20underwear%20upskirt%20waifu2x%20wet.jpg",
    "https://konachan.com/sample/9b55085cc75865615b3b09d810ed5b50/Konachan.com%20-%20312903%20sample.jpg",
    "https://konachan.com/sample/c4e5a1f5e8dfde4e470589fa00eeb8c7/Konachan.com%20-%20312875%20sample.jpg",
    "https://konachan.com/sample/97aedb7f401f17f7ee05f8e42f705dcf/Konachan.com%20-%20312873%20sample.jpg",
    "https://konachan.com/sample/9e40015f416e126b593508f3a71c4a4e/Konachan.com%20-%20312872%20sample.jpg",
    "https://konachan.com/sample/c0f2c86b29474c0b35012778050e7ab3/Konachan.com%20-%20312894%20sample.jpg",
    "https://konachan.com/jpeg/23c2660c30dabc5c66ce69166b7a083b/Konachan.com%20-%20312886%202girls%20braids%20breasts%20brown_hair%20flowers%20game_cg%20gray_hair%20long_hair%20navel%20nipples%20pussy%20red_eyes%20short_hair%20tears%20twintails%20uncensored%20yuri.jpg",
    "https://konachan.com/jpeg/bdc6b2acda7e5931e91472e2b05dede6/Konachan.com%20-%20312892%20blonde_hair%20breasts%20cropped%20crown%20dress%20green_eyes%20namikawa_shelter%20nipples%20rosalina%20super_mario%20third-party_edit.jpg",
    "https://konachan.com/jpeg/631cc8c759fdeea2c9c947b512b2dbc7/Konachan.com%20-%20312891%20aliasing%20animal_ears%20anthropomorphism%20azur_lane%20breasts%20censored%20cum%20foxgirl%20japanese_clothes%20long_hair%20nipples%20pussy%20sakura_ani%20tail.jpg",
    "https://konachan.com/sample/45f391804993d76c9a005f672343ddce/Konachan.com%20-%20312848%20sample.jpg",
    "https://konachan.com/sample/44b2858cb94d0ffada0f2c91289748b9/Konachan.com%20-%20312827%20sample.jpg",
    "https://konachan.com/sample/d78a30a50ecc9138da79f9033bd51b89/Konachan.com%20-%20312814%20sample.jpg",
    "https://konachan.com/sample/a594a228f6121c1e576bfb7a0f60c09e/Konachan.com%20-%20312824%20sample.jpg",
    "https://konachan.com/image/844a753a2ce7b5adeb53823be6b0a359/Konachan.com%20-%20312735%20anus%20ass%20blush%20brown_eyes%20brown_hair%20cropped%20flowers%20katou_megumi%20kneehighs%20panty_pull%20petals%20pussy%20school_uniform%20short_hair%20skirt%20uncensored.jpg",
    "https://konachan.com/image/22d33cb7d8b5a100817aee9510a3bc3b/Konachan.com%20-%20312740%20anus%20aqua_eyes%20ass%20blue_hair%20blush%20cropped%20dress%20headdress%20maid%20panties%20panty_pull%20pussy%20rem_%28re%3Azero%29%20short_hair%20thighhighs%20uncensored%20underwear.jpg"
  ]; //Para añadir mas imagenes pon ,"LINKDELAIMAGEN" y ya xd

  const mathrandom = Math.floor(Math.random() * Lolis.length);

  var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(Lolis[mathrandom]);
  message.channel.send(embed);
};
