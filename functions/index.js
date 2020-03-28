const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

const { getScore } = require("./utils/recaptcha");
const { sendMail } = require("./utils/nodemailer");

// Function to send the contact email
exports.contact = functions
  .region("europe-west1")
  .https.onRequest(async (req, res) => {
    return cors(req, res, async () => {
      try {
        if (req.method !== "POST") throw new Error("Not Allowed");
        const { name, to, message } = req.body;
        if (!name || !to || !message)
          throw new Error("Todos los campos son obligatorios");

        const emailResponse = await sendMail(to, name, message);
        console.log("Email Response: ", emailResponse);
        res.status(200).json({ ...emailResponse });
      } catch (err) {
        res.status(403).json({ error: err.message });
      }
    });
  });

// Function to verify user response with Google recaptcha v3
exports.sendRecaptcha = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    return cors(req, res, async () => {
      try {
        if (req.method !== "GET") throw new Error("Not Allowed");

        const { token } = req.query;
        const recaptchaResponse = await getScore(token);

        console.log("sendRecaptcha: ", recaptchaResponse);
        res.status(200).json({ ...recaptchaResponse });
      } catch (err) {
        res.status(403).json({ error: err.message });
      }
    });
  });
