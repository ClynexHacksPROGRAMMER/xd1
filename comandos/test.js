const { Client, MessageEmbed } = require("discord.js");
const marsnpm = require("marsnpm");
const Discord = require("discord.js");
const weather = require("weather-js");
const request = require("request-promise-native");
let activeChannels = [];
module.exports = async (client, message, args, ops) => {
  if (activeChannels.includes(message.channel.id)) {
    return client.emit(
      "error",
      "",
      client.i18n.error(message.guild.language, "isGameInUse", "trivia"),
      message.channel
    );
  }

  let difficulties = ["easy", "medium", "hard"];
  args.difficulty = difficulties.includes(args.difficulty.toLowerCase())
    ? args.difficulty.toLowerCase()
    : "easy";

  let options = {
    method: "GET",
    url: `https://opentdb.com/api.php?amount=1&type=boolean&difficulty=${args.difficulty}&encode=url3986`,
    json: true
  };
  let response = await request(options);

  if (!response) {
    return client.emit(
      "error",
      "",
      client.i18n.error(message.guild.language, "connection"),
      message.channel
    );
  }

  response = response.results[0];

  let question = await message.channel.send({
    embed: {
      color: "BLUE",
      title: "Trivia - True/False",
      description: decodeURIComponent(response.question),
      fields: [
        {
          name: "Category",
          value: decodeURIComponent(response.category),
          inline: true
        },
        {
          name: "Difficulty",
          value: response.difficulty.toTitleCase(),
          inline: true
        }
      ],
      footer: {
        text: "Reply with either True/False within 60 seconds."
      }
    }
  });

  activeChannels.push(message.channel.id);

  let validAnswers = ["true", "false"];

  const trivia = message.channel.createMessageCollector(
    msg => !msg.author.bot && validAnswers.includes(msg.content.toLowerCase()),
    { maxMatches: 1, time: 60 * 1000 }
  );

  trivia.on("collect", ans => {
    let color, description;
    if (ans.content.toLowerCase() === response.correct_answer.toLowerCase()) {
      color = "BLUE";
      description = `${ans.author.tag} you're absolutely right.`;
    } else {
      color = "RED";
      description = `Unfortunately, you're wrong ${ans.author.tag}`;
    }

    message.channel
      .send({
        embed: {
          color: color,
          description: description
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  });

  trivia.on("end", (answers, reason) => {
    activeChannels.splice(activeChannels.indexOf(message.channel.id), 1);

    if (reason === "time") {
      message.channel
        .send({
          embed: {
            color: Bastion.colors.RED,
            title: "Trivia Ended",
            description:
              "Trivia was ended as no one was able to answer within 60 seconds."
          }
        })
        .then(() => {
          question.delete().catch(() => {});
        })
        .catch(e => {
          client.log.error(e);
        });
    }
  });
};
