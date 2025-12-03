var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const url = "*********
";
const client = new MongoClient(url);

router.get('/', async (req, res) => {
  try {
    // MongoDB�ɐڑ�
    await client.connect();

    const database = client.db('notes');        // �f�[�^�x�[�X��
    const notes = database.collection('notes'); // �R���N�V������

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to database");
  } finally {
    // �������ƌ��������̂ŁA�K�v�Ȃ�R�����g�A�E�g���Ă�OK
    await client.close();
  }
});

module.exports = router;