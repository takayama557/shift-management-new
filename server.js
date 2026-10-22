
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// publicフォルダのファイルをブラウザに公開する
app.use(express.static(path.join(__dirname, "public")));

// サーバーを起動する
app.listen(PORT, () => {
    console.log(`サーバー起動：http://localhost:${PORT}`);
});
