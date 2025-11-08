
var GoogleGenAI = require("@google/genai").GoogleGenAI;

require('dotenv').config()
const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEN_AI_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "give me a poet about a man named Chonk and how fat he is, only include the poem without any other text",
  });
  return response.text
}




var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let gem = await main();
//   res.json({"gemini_response": "PLACEHOLDER"});
  console.log(gem);
  res.send(gem);
});

module.exports = router;