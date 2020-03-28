const functions = require("firebase-functions");
const axios = require("axios");

exports.getScore = async token => {
  try {
    const secret = functions.config().recaptcha.secret;
    const response = await axios.get(
      `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );
    const { data } = response;
    if (!data.success) throw new Error(data["error-codes"]);
    if (data.success && data.score < 0.9) throw new Error("Not Human");
    return data;
  } catch (err) {
    throw Error(err.message);
  }
};
