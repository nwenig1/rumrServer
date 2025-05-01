const express = require('express'); 
const app = express(); 
const port = 3000; 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //for processing form data in dev
app.set('view engine', 'ejs');
app.use(express.static('views'));
// In here, we can replace the allowed ip ranges with the structure from the Trinity IP subnet. This way we listen to all possible devices, but restrict
// access if the ip does not match the trinity allowed rangel.
const allowedIPRanges = [
  /^129\.115\./,         // Trinity University's subnet (example) VERIFY ON CAMPUS. 
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./
];

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const allowed = allowedIPRanges.some(regex => regex.test(ip));

  if (!allowed) {
    console.log(`Blocked request from ${ip}`);
    return res.status(403).send('Access restricted to university network.');
  }

  next();
});


const ChatController = require('./controllers/ChatController');
const RoomController = require('./controllers/RoomController'); 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getMessages/:roomId', ChatController.getMessages); 

app.post('/sendMessage', ChatController.sendMessage); 

app.get('/getRooms', RoomController.getRooms)

app.post('/createRoom', RoomController.createRoom); 
app.get('/createUser', ChatController.createUser); 


app.get('/sendMessageUI', (req, res) => {
    //this is not working cuz ejs module isnt found, honestly have no idea why.
    //might work on yall's local idk, node dependencies are scary 
    //  Not essential, was just gonna use the page for some forms so I could test the post routes. 
    res.render('messageUI'); 
}); 


app.get('/createRoomUI', (req, res) => {
  res.render('roomUI'); 
})




// make sure to listen to all access device types, but then filter out access only by the received ip
app.listen(port, '0.0.0.0',() => {
  console.log(`Server listening on all interfaces at port ${port}`);
});