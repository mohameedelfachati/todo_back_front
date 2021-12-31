var express = require("express");

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
  console.log(req.body.name);
  const postResponse = await db.collection("posts").add({
    title: "AADev I want to setup firestore with node js ",
    priority: "important",
    date: "12-12-2021 00:00:00",
    details: "set up firestore with node js ",
    status: "inProgress",
  });

  res.status(201).json({
    message: postResponse,
  });
});
