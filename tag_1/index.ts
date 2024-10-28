import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const starships = [
  { id: 1, name: "Millenium Falcon" },
  { id: 2, name: "X-Wing" },
  { id: 3, name: "TIE Fighter" },
];

// das paket cors ist eine sogenannte middleware — also als funktion die bei jedem Request ausgefuehrt wird.
// Wir binden sie hier ein, um dem Browser zu signalisieren dass er die Daten aus dieser API nutzen darf, egal unter welcher Domain
app.use(cors());

app.get("/hallo", (request, response) => {
  // im request bzw. req objekt finden wir alle informationen ueber den request die unser server erhalten hat
  // mit response.send() und response.json() koennen wir unsere server wahlweise mit plaintext oder json antworten lassen
  // response.send("Guten Tag!")
  response.json({ answer: "Guten Tag" });
});

app.get("/starships", (req, res) => {
  res.json(starships);
});

//mit app.listen(PORT, CALLBACK) starten wir unseren server, und binden ihn an einen bestimmten port.
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});