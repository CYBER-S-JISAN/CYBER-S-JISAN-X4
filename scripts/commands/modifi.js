const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "modifi",
  version: "1.1.0",
  permission: 1, // শুধু অ্যাডমিন
  credits: "Shakib",
  description: "Replace old name with new name in all files",
  commandCategory: "admin",
  usages: "-modifi [পুরানোনাম] [নতুননাম]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  if (args.length < 2) 
    return api.sendMessage("❌ Usage: -modifi [পুরানোনাম] [নতুননাম]", event.threadID);

  const oldName = args[0];
  const newName = args.slice(1).join(" "); // বাকি সব args newName

  const replaceName = (dir) => {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        replaceName(filePath);
      } else {
        try {
          let content = fs.readFileSync(filePath, "utf8");
          const regex = new RegExp(oldName, "g");
          content = content.replace(regex, newName);
          fs.writeFileSync(filePath, content, "utf8");
        } catch (err) {
          console.log("Error in file:", filePath);
        }
      }
    });
  };

  replaceName("./");

  api.sendMessage(`✅ '${oldName}' সব জায়গায় পরিবর্তন হয়ে গেছে '${newName}' হিসেবে!`, event.threadID);
};
