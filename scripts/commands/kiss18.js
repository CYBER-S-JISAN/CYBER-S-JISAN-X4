module.exports.config = {
  name: "kiss18",
  version: "2.0.0",
  permission: 0,
  credits: "Sakib Vai",
  description: "Sexy 18+ kiss with mention",
  prefix: true,
  category: "adult",
  usages: "[@mention]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, mentions } = event;
  const mentionIDs = Object.keys(mentions);

  if (mentionIDs.length === 0) {
    return api.sendMessage("💋 একজনকে মেনশন করো কিস করার জন্য!", threadID, messageID);
  }

  const targetID = mentionIDs[0];
  const targetName = mentions[targetID].replace("@", "");

  const kissMessages = [
    `${targetName}, ঠোঁটের গরমে এখন শরীরটা কাঁপছে... একবার কিস দিলে বুঝবে! 😘🔥`,
    `${targetName}, তোমার ঠোঁট আমার ঠোঁটের সাথে যেন আগুন ধরিয়ে দিলো! 💋🔥`,
    `${targetName}, চলো আজ রাতটা শুধুই ঠোঁটের গল্প হোক... 😈💋`,
    `${targetName}, আমার ঠোঁটে এখন তোমার নাম খোদাই করা... একটা কিস দাও না! 😘`,
    `${targetName}, তোমার ঠোঁটের স্বাদ মধুর থেকেও মিষ্টি! 🍯💋`,
    `${targetName}, এমন এক কিস দিবো, চোখ বন্ধ করলে আজীবন মনে থাকবে! 😍🔥`,
    `${targetName}, ঠোঁট আর শরীর একসাথে কম্পন করছে, তুমি বুঝতেই পারছো না! 💋💦`,
    `${targetName}, আমার ঠোঁট তোমার ঠোঁটে আটকে গেলে, পৃথিবী থেমে যাবে! 🌍💏`,
    `${targetName}, আজ রাতে শুধু তুমি আর আমি... আর ঠোঁটের যুদ্ধ! 😈🔥`,
    `${targetName}, চলো একটা কিস দিয়ে শুরু করি, তারপর দেখি কোথায় যাই... 😉💋`,
    `${targetName}, তোমাকে চুমু খেতে খেতে আমার নিঃশ্বাস গরম হয়ে গেছে... 😘🔥`,
    `${targetName}, এমন কিস দিবো, তোমার হৃৎস্পন্দন বেড়ে যাবে! ❤️‍🔥💋`,
    `${targetName}, ঠোঁটের স্পর্শে আজ শরীরের সব সীমানা হারিয়ে ফেলেছি! 🔥💋`,
    `${targetName}, কিস করার সময় তুমি চোখ বন্ধ করো, আমি জাদু দেখাবো! 😍✨`,
    `${targetName}, তোমার ঠোঁট চেপে ধরলে বুঝবো তুমি আমায় চাও... 😈💋`,
    `${targetName}, ঠোঁটে ঠোঁট, নিঃশ্বাসে নিঃশ্বাস... tonight just us! 💋🌙`,
    `${targetName}, তুমি বললে এখনই তোমার ঠোঁট দখলে নিতে পারি! 😘🫦`,
    `${targetName}, ঠোঁট শুধু চুমুর জন্য না, অনুভব করার জন্য! 💋🔥`,
    `${targetName}, এই কিস হবে এত গরম, AC দিয়েও ঠান্ডা হবে না! 🥵💋`,
    `${targetName}, একটু কিস চাই শুধু… তারপর যা চাইবে তাই দিবো! 😉💋`,
    `${targetName}, তোমার ঠোঁটকে আজ এমন ভালোবাসা দিবো, শরীর কাঁপবে! 🔥😍`,
    `${targetName}, তুমি শুধু বলো ‘yes’, ঠোঁট তোমার আমি চুরি করবো! 😈💋`,
    `${targetName}, ঠোঁটের নিচে একটা কিস দিলে তুমি গলে যাবে... 😘💦`,
    `${targetName}, tonight, শুধু কিস আর কিস, কোনো নিয়ম নেই! 🔞💋`,
    `${targetName}, তুমি কি জানো, একটাই কিস তোমাকে পাগল করে দিতে পারে! 😍🔥`,
    `${targetName}, ঠোঁট ছোঁয়াতে চাই তোমাকে… রোমান্সে হারিয়ে যেতে চাই! 💏💋`,
  ];

  const message = kissMessages[Math.floor(Math.random() * kissMessages.length)];

  return api.sendMessage({
    body: message,
    mentions: [{ tag: targetName, id: targetID }]
  }, threadID, messageID);
};
