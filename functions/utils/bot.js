const functions = require("firebase-functions");
const { Telegram } = require("telegraf");
const botConfig = functions.config().bot;

const bot = new Telegram(botConfig.token);

exports.sendBot = async message => {
  try {
    return bot.sendMessage(botConfig.tchat, message);
  } catch (err) {
    throw new Error(err.message);
  }
};
