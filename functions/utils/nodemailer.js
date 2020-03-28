const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const hbs = require("handlebars");
const { auth } = require("./auth");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth
});

const templateFile = path.join(__dirname, "../template.html");
const htmlstr = fs.readFileSync(templateFile).toString();

const template = hbs.compile(htmlstr);

exports.sendMail = async (to, name, message) => {
  try {
    console.log("Sending Email...");
    const response = await transporter.sendMail({
      to,
      subject: "🧾Solicitud de presupuesto en teresaromero.dev",
      html: template({
        message,
        name,
        emailLOPD: "hola@teresaromero.dev"
      })
    });
    return response;
  } catch (err) {
    console.log("Error: ", err.message);
    throw new Error(err.message);
  }
};
