module.exports.config = {
  name: "mentionReply",
  version: "1.1.2",
  permission: 0,
  credits: "Sakib",
  description: "যখন কেউ মেসেজে নির্দিষ্ট নাম লেখে তখন বট reply দিয়ে উত্তর দেয়",
  category: "utility",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;

  const nameKeywords = [
    "শাকিব",
    "সাকিব",
    "দিলবার"
  ];

  function bodyContainsName(text) {
    if (!text) return false;
    text = text.toLowerCase();
    return nameKeywords.some(keyword => text.includes(keyword.toLowerCase()));
  }

  const replyMessages = [
    "ওরে বেটা! শাকিব ভাই কে ডাকছো কেন? সাহস তো কম না তোর 😏",
    "ভাই একটু দম নিন... শাকিব ভাই এখন ব্যস্ত, দয়া করে বিরক্ত কইরো না 😤",
    "তুই কি জানিস না শাকিব ভাই এখন Netflix & Chill করছে 🍿📺",
    "সে তো এখন তার প্রেমিকার সাথেই ব্যস্ত 💑... তোকে কে সময় দিবে রে!",
    "ট্যাগ ট্যাগ করছো না, ওনি কি তোর বাপরে? 😎",
    "Stop pinging শাকিব ভাই! উনি এখন 'Do Not Disturb' মোডে 🚫📱",
    "শাকিব ভাই তো এখন বউয়ের কানের দুল কিনতেছে বাজারে 😆",
    "ভাই tag মারার আগে আয়না দেখে আসবি, tag পাওয়ার যোগ্য হইছস? 🤭",
    "এইটা tag করার সময় না... শাকিব ভাই এখন hot coffee নিয়া status লিখতেছে ☕💬",
    "শাকিব ভাই এখন “প্রেমের কবি” mood এ আছে 📜, tag দিলে কবিতা বানায় দিবে 😅",
    "ভাই tag না দিয়া প্রেম কর... ওনাকে disturb করলে relation break হইব 🙄",
    "Tag দিলে যে রিপ্লাই দিবে এমন বোকা না সে 😌",
    "সে এখন ব্যস্ত, পরে দেখা হইবো ইনশাআল্লাহ 😇",
    "ভাব নিয়ে হাটে... আর তুই ট্যাগ দিস... দুঃসাহস 😤",
    "সাবধান! শাকিব ভাই কে tag দিলে লাইফে শান্তি থাকবে না 😱",
    "উনি VIP মানুষ, তোর tag তার নোটিফিকেশনেই আসে না 🤣",
    "তুই কি জানিস, শাকিব ভাই এখন OnlyFans খুলছে 😳",
    "শাকিব ভাই তো এখন Crush এর স্ট্যাটাস পড়তেছে 🥲 disturb করবি না",
    "দোস্ত tag দিছোস ভালো কথা, দোয়া কর ওনিও তোরে tag না দেয় 😈",
    "নাম দেখে call করিস, tag না করিস 😒"
  ];

  if (bodyContainsName(body)) {
    const randomMsg = replyMessages[Math.floor(Math.random() * replyMessages.length)];
    return api.sendMessage(randomMsg, threadID, messageID);
  }
};
