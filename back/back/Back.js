var express = require("express");
var cors = require("cors");

var bodyParser = require("body-parser");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const serviceAccount = require("../back/todoapp-3f899-firebase-adminsdk-av64g-2f1563cd41.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3001" }));

app.listen(3000, () => {});

app.get("/post", async (req, res, next) => {
  console.log("/test requested");
  const citiesRef = db.collection("posts");
  const snapshot = await citiesRef.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }

  const postsList = [];
  snapshot.forEach((doc) => {
    postsList.push(doc.data());
  });
  res.status(200).json({
    data: postsList,
  });
});

app.post("/post", async (req, res, next) => {
  console.log(req.body);
  try {
    const poste = {
      title: req.body["title"],
      priority: req.body["priority"],
      details: req.body["details"],
      status: req.body["status"],
      date: req.body["date"],
    };
    const newDoc = await db.collection("posts").add(poste);
    res.status(201).json({
      message: "postResponse",
    });
  } catch (error) {
    res.status(400).send(`poste is not added correctly`);
  }
});
