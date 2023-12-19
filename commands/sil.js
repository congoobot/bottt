const Discord = require("discord.js")
exports.run = (client, message,args) => {


  const temizle = args[0]
  if(!temizle) return message.reply("Lütfen bir miktar belirt!")
  message.channel.bulkDelete(temizle).catch(err => message.reply("Bir hata oluştu."))
  if (!message.member.permissions.has("MANAGE_MESSAGE")) return message.channel.send(`Yetkin yetmiyor!`);

  return message.channel.send(`Başarıyla temizledim. 🗑`)
}

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'sil'
};
