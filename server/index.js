const express = require("express");
const cors = require("cors");
const { application } = require("express");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//Fortunes
const fortunes = [
  // "A friend is a present you give yourself.",
  // "A hunch is creativity trying to tell you something.",
  // "A person of words and not deeds is like a garden full of weeds.",
  // "Advice, when most needed, is least heeded."
];

app.get("/api/fortune", (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.post("/api/fortune", (req, res) => {
  const {newFortune} = req.body;
  
  fortunes.push(newFortune);

  res.sendStatus(200).send("Fortune Added!");
});

app.delete("/api/fortune", (req, res) => {
  const {delFortune} = req.body;
  console.log(delFortune);

  for(let i = 0; i < fortunes.length; i++){
    if(fortunes[i] === delFortune){
      fortunes.pop(fortunes[i]);
    }
  }

  console.log(fortunes);

  res.status(200).send("Fortune deleted");
});

//Run the server
app.listen(4000, () => console.log("Server running on 4000"));
