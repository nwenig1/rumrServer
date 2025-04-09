const express = require('express'); 
const app = express(); 
const port = 3000; 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //for processing form data in dev
app.set('view engine', 'ejs');
app.use(express.static('views'));

const ChatController = require('./controllers/ChatController');
const RoomController = require('./controllers/RoomController'); 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getMessages/:roomId', ChatController.getMessages); 

app.post('/sendMessage', ChatController.sendMessage); 

app.post('/getRooms', RoomController.getRooms)

app.post('/createRoom', RoomController.createRoom); 


app.get('/sendMessageUI', (req, res) => {
    //this is not working cuz ejs module isnt found, honestly have no idea why.
    //  Not essential, was just gonna use the page for some forms so I could test the post routes. 
    res.render('messageUI'); 
}); 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})