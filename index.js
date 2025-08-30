import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🐾 Pet Market API çalışıyor!");
});

app.listen(5000, () => {
  console.log("Server 5000 portunda çalışıyor...");
});
