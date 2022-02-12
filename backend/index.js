const express = require("express");
const { google } = require("googleapis");
const credentials = require("./key/credentials.json");

const app = express();

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./backend/key/credentials.json",

    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1T83POHAkw3ByYGoSwzsSHINvx4eIr7o_1e95IV1Aj54";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  //read rows
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Concert!B3:L",
  });

  res.send(getRows.data);
});

app.listen(1337, (req, res) => console.log("server running on 1337"));
