module.exports.config = {
  name: "roast",
  version: "1.0.0",
  permission: 0,
  credits: "Sakib Vai",
  description: "Mention করে কাউকে মজা করে roast করে",
  prefix: true,
  category: "fun",
  usages: "@mention",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID, mentions } = event;

  if (!Object.keys(mentions).length) {
    return api.sendMessage("🔍 কারে roast করব, নাম তো বলো! 😏", threadID, messageID);
  }

  const mentionID = Object.keys(mentions)[0];
  const mentionName = mentions[mentionID];

  const roastLines = [
    "তোর ব্রেইনে WiFi আছে 📶, কিন্তু কানেকশন লাগে না 🤡!",
    "তুই এত অলস 😴, আয়নাও তোকে দেখে হাই তোলে 😪!",
    "তোর মাথায় এত ধোঁয়া 💨, মনে হয় চিন্তা নয় আগুন ধরছে 🔥!",
    "তোর IQ এত কম 🤯, গুগল সার্চ দিলে বলে: 'No Results Found!' 🫥",
    "তুই এত বোকা 🐸, তোকে দেখে CAPTCHA-ও কাঁদে 😭!",
    "তুই এত ফাঁকা 😶, Google Maps-ও খুঁজে পায় না 🗺️!",
    "তুই যদি অ্যাপ হইতিস 📱, তাহলে Error 404 হইতি 🧠❌!",
    "তোর কথা শুনলে Airplane Mode-ও কান্না করে ✈️😭!",
    "তুই এত ফেক 🤖, AI পর্যন্ত দ্বিধায় পড়ে যায় 🧠🔁!",
    "তুই এতই মজা দিস 🤡, তোকে circus-এ হিরো বানাবে 🤹‍♂️!",
    "তোর হাসি এত ভয়ের 😬, জোকার পর্যন্ত রেজাইন দিছে 🤡📝!",
    "তোর মুখ দেখে মনে হয় face ID-ও হ্যান্ডস আপ করে দিছে 📸😳!",
    "তুই এত বাজে গাইস 😭, অটোটিউনও বমি করে 🤮🎤!",
    "তোর মাথায় এত বাতাস 💨, মনে হয় CPU fan ঘোরে 🌪️!",
    "তুই এত ফালতু 🤏, recycle bin-ও তোকে নেয় না 🗑️!",
    "তোর প্রেমের গল্প এমন 🤡💔, Netflix-ও বলছে 'too unrealistic' 📺🚫!",
    "তোর লুক এমন 🫠, মিরর নিজে নিজেই ফেটে যায় 🪞💥!",
    "তুই এমন এক ট্যালেন্ট 🎪, পুরা গ্রুপ chat থেকে লিভ নেয় 🚪👋!",
    "তোর পেছনে দাঁড়ালে নোটিফিকেশনও আসে না 🔕😆!",
    "তুই তো এমন 🧂, তোকে দিয়েই roast করা যায় 😂!"
  ];

  const randomRoast = roastLines[Math.floor(Math.random() * roastLines.length)];
  const message = `@${mentionName.replace("@", "")}, ${randomRoast}`;

  return api.sendMessage({
    body: message,
    mentions: [{
      tag: `@${mentionName.replace("@", "")}`,
      id: mentionID
    }]
  }, threadID, messageID);
};
