const functions = require("firebase-functions");
const { google } = require("googleapis");
const gCredentials = functions.config().credentials;

// Setting up google gmail
const OAuth2 = google.auth.OAuth2;
const oAuth2Client = new OAuth2(
  gCredentials.web.client_id,
  gCredentials.web.client_secret,
  gCredentials.web.redirect_uri
);
oAuth2Client.setCredentials({
  refresh_token: gCredentials.refresh_token
});

exports.auth = {
  type: "oauth2",
  user: "hola@teresaromero.dev",
  clientId: gCredentials.web.client_id,
  clientSecret: gCredentials.web.client_secret,
  refreshToken: gCredentials.refresh_token
};