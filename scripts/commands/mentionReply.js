module.exports.config = {
  name: "mentionReply",
  version: "1.1.0",
  permission: 0,
  credits: "Sakib",
  description: "যখন কেউ তোমাকে ট্যাগ বা ডাকনাম দিয়ে ডাকে তখন বট অটোমেটিক রিপ্লাই দেয়",
  category: "utility",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const { threadID, messageID, mentions, body } = event;

  // টার্গেট UID যার নাম বা ট্যাগে প্রতিক্রিয়া দেবে
  const targetUIDs = [
    "100090445581185",  // প্রথম ইউজার UID
    "61576554697089"    // দ্বিতীয় ইউজার UID
  ];

  const nameKeywords = [
    "শাকিব",
    "সাকিব",
    "সাকিব স্যার",
    "শাকিব স্যার"
  ];

  function bodyContainsName(text) {
    if (!text) return false;
    text = text.toLowerCase();
    return nameKeywords.some(keyword => text.includes(keyword.toLowerCase()));
  }

  const replyMessages = [
    "{mention}, ওরে বেটা! শাকিব ভাই কে ট্যাগ করছোস কেন? সাহস তো কম না তোর 😏",
    "{mention}, ভাই একটু দম নিন... শাকিব ভাই এখন ব্যস্ত, দয়া করে বিরক্ত কইরো না 😤",
    "{mention}, তুই কি জানিস না শাকিব ভাই এখন Netflix & Chill করছে 🍿📺",
    "{mention}, সে তো এখন তার প্রেমিকার সাথেই ব্যস্ত 💑... তোকে কে সময় দিবে রে!",
    "{mention}, ট্যাগ ট্যাগ করছো, ওনি কি তোর বাপরে? 😎",
    "{mention}, Stop pinging শাকিব ভাই! উনি এখন 'Do Not Disturb' মোডে 🚫📱",
    "{mention}, শাকিব ভাই তো এখন বউয়ের কানের দুল কিনতেছে বাজারে 😆",
    "{mention}, ভাই tag মারার আগে আয়না দেখে আসবি, tag পাওয়ার যোগ্য হইছস? 🤭",
    "{mention}, এইটা tag করার সময় না... শাকিব ভাই এখন hot coffee নিয়া status লিখতেছে ☕💬",
    "{mention}, শাকিব ভাই এখন “প্রেমের কবি” mood এ আছে 📜, tag দিলে কবিতা বানায় দিবে 😅",
    "{mention}, ভাই tag না দিয়া প্রেম কর... ওনাকে disturb করলে relation break হইব 🙄",
    "{mention}, Tag দিলে যে রিপ্লাই দিবে এমন বোকা না সে 😌",
    "{mention}, সে এখন ব্যস্ত, পরে দেখা হইবো ইনশাআল্লাহ 😇",
    "{mention}, ভাব নিয়ে হাটে... আর তুই ট্যাগ দিস... দুঃসাহস 😤",
    "{mention}, সাবধান! শাকিব ভাই কে tag দিলে লাইফে শান্তি থাকবে না 😱",
    "{mention}, উনি VIP মানুষ, তোর tag তার নোটিফিকেশনেই আসে না 🤣",
    "{mention}, তুই কি জানিস, শাকিব ভাই এখন OnlyFans খুলছে 😳",
    "{mention}, শাকিব ভাই তো এখন Crush এর স্ট্যাটাস পড়তেছে 🥲 disturb করবি না",
    "{mention}, দোস্ত tag দিছোস ভালো কথা, দোয়া কর ওনিও তোরে tag না দেয় 😈",
    "{mention}, নাম দেখে call করিস, tag না করিস 😒"
  ];

  if (mentions && Object.keys(mentions).length > 0) {
    for (const id in mentions) {
      if (targetUIDs.includes(id)) {
        const randomMsg = replyMessages[Math.floor(Math.random() * replyMessages.length)];
        const messageToSend = randomMsg.replace(/{mention}/g, mentions[id]);
        return api.sendMessage(messageToSend, threadID, messageID);
      }
    }
  }

  if (bodyContainsName(body)) {
    const fallbackMention = "দোস্ত";
    const randomMsg = replyMessages[Math.floor(Math.random() * replyMessages.length)];
    const messageToSend = randomMsg.replace(/{mention}/g, fallbackMention);
    return api.sendMessage(messageToSend, threadID, messageID);
  }
};
