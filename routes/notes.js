var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const url = "*********";
const client = new MongoClient(url);

router.get('/', async (req, res) => {
  try {
    // MongoDB?øΩ…ê⁄ëÔøΩ
    await client.connect();

    const database = client.db('notes');        // ?øΩf?øΩ[?øΩ^?øΩx?øΩ[?øΩX?øΩ?øΩ
    const notes = database.collection('notes'); // ?øΩR?øΩ?øΩ?øΩN?øΩV?øΩ?øΩ?øΩ?øΩ?øΩ?øΩ

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to database");
  } finally {
    // ?øΩ?øΩ?øΩ?øΩ¬ÇÔøΩ?øΩ?øΩ∆åÔøΩ?øΩ?øΩ?øΩ?øΩ?øΩ?øΩ?øΩÃÇ≈ÅA?øΩK?øΩv?øΩ»ÇÔøΩR?øΩ?øΩ?øΩ?øΩ?øΩg?øΩA?øΩE?øΩg?øΩ?øΩ?øΩƒÇÔøΩOK
    await client.close();
  }
});

module.exports = router;