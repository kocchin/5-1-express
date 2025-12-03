var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const url = "mongodb+srv://YUTO:Mitonishi31024@cluster0.gor0enz.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);

router.get('/', async (req, res) => {
  try {
    // MongoDBに接続
    await client.connect();

    const database = client.db('notes');        // データベース名
    const notes = database.collection('notes'); // コレクション名

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to database");
  } finally {
    // 毎回閉じると効率悪いので、必要ならコメントアウトしてもOK
    await client.close();
  }
});

module.exports = router;