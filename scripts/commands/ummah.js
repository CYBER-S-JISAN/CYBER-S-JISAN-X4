module.exports.config = {
  name: "ummah",
  version: "1.0.0",
  permission: 0,
  credits: "Sakib Vai",
  description: "Send a romantic 18+ Ummah kiss to someone",
  prefix: true,
  category: "adult",
  usages: "[@mention]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("😘 কারে উম্মাহ দিবা? আগে মেনশন করো!", threadID, messageID);
  }

  const targetID = mentionIDs[0];
  const targetName = mentions[targetID].replace("@", "");

  const ummahMessages = [
  `😚 উম্মাহ ${targetName}, তোমার গালে একখান জোরে চুমু দিলাম!`,
  `😘 ${targetName}, তুমি এত কিউট যে একবার নয়, দশবার উম্মাহ দিতে মন চায়!`,
  `😚 ${targetName}, ঠোঁট ছুঁয়ে উম্মাহ দিলাম… এখন তো তুমি গলে যাবে!`,
  `🥵 ${targetName}, উম্মাহ দিলেই তুমি এত কাঁপ কেন? এত গরম লাগছে নাকি?`,
  `💋 ${targetName}, একখান উম্মাহ তোমার গাল থেকে ঠোঁট পর্যন্ত পৌঁছে গেছে!`,
  `😘 ${targetName}, তোমার ঠোঁটে একটুকু উম্মাহ... এখন যদি আরেকটা দেই!`,
  `💦 ${targetName}, উম্মাহ দিলেই তোমার নিঃশ্বাস বদলে যায়… বুঝি প্রেমে পড়ছো!`,
  `😈 ${targetName}, উম্মাহ দিলাম কিন্তু তুমি ফিরিয়ে দাওনি... এই অন্যায়!`,
  `😚 ${targetName}, এতটা আদরে উম্মাহ দিলাম, এখন একটু জড়ায়ে ধরো তো!`,
  `🔥 ${targetName}, উম্মাহ দিলাম এমনভাবে যেন শরীরেই আগুন লেগে যায়!`,
  `😘 ${targetName}, আজকে শুধু উম্মাহ-উম্মাহ খেলবো… তুমি রাজি তো?`,
  `❤️‍🔥 ${targetName}, তোমার কানে, গালে, ঠোঁটে তিনটা উম্মাহ দিলাম একসাথে!`,
  `🥵 ${targetName}, উম্মাহ দিতেই তুমি একটু কেঁপে উঠলে… তোমার শরীর মিষ্টি রে!`,
  `😚 ${targetName}, এত জোরে উম্মাহ দিলাম, তোমার ঠোঁট লাল হয়ে গেছে!`,
  `😉 ${targetName}, উম্মাহ তো দিলাম… এবার যদি একটু কোলেও আসো…`,
  `💋 ${targetName}, tonight উম্মাহ দিয়ে শুরু করলাম, এরপর… 😉🔥`,
  `🤭 ${targetName}, তোমার গাল এত নরম, উম্মাহ দিতে দিতে addicted হয়ে গেলাম!`,
  `🫦 ${targetName}, উম্মাহ দিলেই যেন শরীরে বিদ্যুৎ খেলে যায়!`,
  `🔥 ${targetName}, আজ রাতের উম্মাহ শুধুই তোমার জন্য, বাকি কেউ পাবেনা!`,
  `💓 ${targetName}, উম্মাহ তো দিলাম... এখন একটা হালকা কামড় দেবো?`,
  `💦 ${targetName}, তোমার গালের গন্ধে উম্মাহ দিলাম, নেশা লেগে গেল!`,
  `👄 ${targetName}, উম্মাহ দিতে দিতে ঠোঁট রসালো হয়ে উঠছে... টের পাচ্ছো?`,
  `🥺 ${targetName}, আজ একটু বেশিই আদর করবো... উম্মাহ দিয়ে শুরু করলাম!`,
  `🔥 ${targetName}, তোমার ঠোঁটের গরমে উম্মাহটা ছিলো জাস্ট ওওওফফফ!`,
  `😉 ${targetName}, উম্মাহ দিতে গিয়েই তোমার চুলে হাত চলে গেল… তোমার ঘ্রাণটা মধুর!`,
  `💘 ${targetName}, তোমার বুকে মাথা রেখে উম্মাহ দিলাম… এখন আর ছাড়বো না!`,
  `😚 ${targetName}, এমন উম্মাহ দিলাম যেন পুরো শরীরটাই শিউরে উঠলো তোমার!`,
];

  const message = ummahMessages[Math.floor(Math.random() * ummahMessages.length)];

  return api.sendMessage({
    body: message,
    mentions: [{ tag: targetName, id: targetID }]
  }, threadID, messageID);
};
