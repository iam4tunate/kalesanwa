import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

const parser = new RSSParser();
let articles = [];

(async () => {
  let feed = await parser.parseURL(
    "https://www.channelstv.com/search/APC/feed/rss2/"
  );
  feed.items.forEach((item) => {
    articles.push({ item });
  });
})();

let app = express();
app.use(cors());
app.use("/", (req, res) => {
  res.send(articles);
});

app.listen(4000);
