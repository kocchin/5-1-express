var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
<<<<<<< HEAD
const url = "*********
";
=======
const url = "****************";
>>>>>>> 0ef8143ca03e2a2f76414effb4d1057a8e8300d1
const client = new MongoClient(url);

router.get('/', async (req, res) => {
  try {
<<<<<<< HEAD
    // MongoDB�ɐڑ�
    await client.connect();

    const database = client.db('notes');        // �f�[�^�x�[�X��
    const notes = database.collection('notes'); // �R���N�V������
=======
    // MongoDBに接続
    await client.connect();

    const database = client.db('notes');        // データベース名
    const notes = database.collection('notes'); // コレクション名
>>>>>>> 0ef8143ca03e2a2f76414effb4d1057a8e8300d1

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to database");
  } finally {
<<<<<<< HEAD
    // �������ƌ��������̂ŁA�K�v�Ȃ�R�����g�A�E�g���Ă�OK
=======
    // 毎回閉じると効率悪いので、必要ならコメントアウトしてもOK
>>>>>>> 0ef8143ca03e2a2f76414effb4d1057a8e8300d1
    await client.close();
  }
});

module.exports = router;
