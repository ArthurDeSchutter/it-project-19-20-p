//create the express server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port `+port))

//Call the gebruiksgroen API and get the JSON data
const fetch = require('node-fetch');
//url that returns the JSON datta ctrl+click to check it out
let url = 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek8/MapServer/847/query?where=1%3D1&outFields=*&outSR=4326&f=json';
//request module to call the url
const request = require("request");

request.get(url, (error, response, body) => {
  //the url returns a string but we want to parse it to json
  let json = JSON.parse(body);
  //console.log(json.features[0].attributes.NAAM);
  for(let i = 0;i<json.features.length;i++){
    console.log(json.features[i].attributes.NAAM);
}
});
