const express = require("express");
const { google } = require("googleapis");

const app = express();

const auth = new google.auth.GoogleAuth({
  keyFile: "./backend/key/credentials.json",

  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const client = auth.getClient();

const googleSheets = google.sheets({ version: "v4", auth: client });

const spreadsheetId = "1T83POHAkw3ByYGoSwzsSHINvx4eIr7o_1e95IV1Aj54";

app.use(async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/concert", async (req, res) => {
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Concert!B3:L",
  });

  res.send(getRows.data.values);
});

app.get("/artist/guitarist", async (req, res) => {
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Artist!B3:D",
  });

  res.send(getRows.data.values);
});

app.get("/artist/signer", async (req, res) => {
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Artist!F3:H",
  });

  res.send(getRows.data.values);
});

app.get("/artist/drummer", async (req, res) => {
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Artist!J3:L",
  });

  res.send(getRows.data.values);
});

app.listen(1337, (req, res) => console.log("server running on 1337"));
