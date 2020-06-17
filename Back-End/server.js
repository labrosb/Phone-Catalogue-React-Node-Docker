import express from 'express';
import data from './datasets/phones';

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

app.use('/images', express.static(__dirname + '/images'));

app.get('/phones', (req, res) => {
  if (data.length === 0) {
    return res.status(400).send("No Phones found!");
  }
  return res.status(200).send(data);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
