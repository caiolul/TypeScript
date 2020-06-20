import express from 'express';
import axios from 'axios';

const app = express();
const port = 3333 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Ola mundo!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
