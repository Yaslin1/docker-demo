import express from "express"
import cors from "cors"
const PORT = process.env.PORT || 3002

const app = express();
app.use(cors());

app.get("/", (req,res) => {
  res.send("Our API is working! On Docker! 🐳");
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})