let express = require("express");
let app  = express();
const port = 3000;

app.use(express.static('public'));

// ルーティングの設定
app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/home.html`);
});

app.get("/about", (req, res) =>{
  res.sendFile(`${__dirname}/public/about.html`);
});

app.get("/works/waffle", (req, res) =>{
  res.sendFile(`${__dirname}/public/waffle.html`);
});

app.get("/works/42", (req, res) =>{
  res.sendFile(`${__dirname}/public/42.html`);  
});

app.get("/works/playground", (req, res) =>{
  res.sendFile(`${__dirname}/public/playground.html`);
});



// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});