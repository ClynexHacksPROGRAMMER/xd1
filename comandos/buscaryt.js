const yt = require("youtube-dl");

module.exports = async (client, message, args) => {
  let texto = args.join(" ");
  if (!texto) return message.channel.send("Pon que hay que buscar!");

  args = `ytsearch:${args.join(" ")}`;
  await yt.getInfo(
    args,
    [
      "-q",
      "--skip-download",
      "--no-warnings",
      "--format=bestaudio[protocol^=http]"
    ],
    async (err, info) => {
      if (
        err ||
        info.format_id === undefined ||
        info.format_id.startsWith("0")
      ) {
        let errorMessage;
        if (err && err.stack.includes("No video results")) {
          errorMessage = client.i18n.error(
            message.guild.language,
            "notFound",
            "video"
          );
        } else {
          errorMessage = client.i18n.error(
            message.guild.language,
            "connection"
          );
        }
        return client.emit("error", "", errorMessage, message.channel);
      }

      await message.channel.send({
        embed: {
          color: "RANDOM",
          author: {
            name: info.uploader,
            url: info.uploader_url
          },
          title: info.title,
          url: `https://youtu.be/${info.id}`,
          fields: [
            {
              name: "Likes",
              value: `${info.like_count}`,
              inline: true
            },
            {
              name: "Dislikes",
              value: `${info.dislike_count}`,
              inline: true
            },
            {
              name: "Views",
              value: `${info.view_count}`,
              inline: true
            }
          ],
          image: {
            url: info.thumbnail
          },
          footer: {
            text: info.is_live ? "Live Now" : `Duration: ${info.duration}`
          }
        }
      });
    }
  );
};
