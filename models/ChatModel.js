

function getMessages(roomId){
    //db query can go here, using an in memory model for now
    //sorting messages by message id will let us put them in the order they were sent 
    const postQueryMessages = messages.filter(message => message.Room_ID == roomId); 
    return postQueryMessages; 
}

function sendMessage(senderId, roomId, message){
    //db query here
    const newMsg = {Message_ID: messages.length +1 , Room_ID: roomId, Sender_ID: senderId, Message: message}; 
    messages.push(newMsg); 
}
function createUser(){
  const newUserId = users.length + 1; 
  const newUser = { UserId: newUserId} 
  users.push(newUser); 
  console.log("Users: " + users); 
  return newUser; 
}

  const users = [
    { UserID: "1"},
    { UserID: "2"},
    { UserID: "3"},
    { UserID: "4"},
    { UserID: "5"}
  ];
  
  const messages = [
    { Message_ID: "1", Room_ID: "1", Sender_ID: "1", Message: "Hey everyone!" },
    { Message_ID: "2", Room_ID: "1", Sender_ID: "2", Message: "Hello! How's your day?" },
    { Message_ID: "3", Room_ID: "1", Sender_ID: "1", Message: "Pretty good, thanks!" },
    { Message_ID: "4", Room_ID: "2", Sender_ID: "3", Message: "Who's pushing the new build?" },
    { Message_ID: "5", Room_ID: "2", Sender_ID: "4", Message: "I am. Just finishing QA." },
    { Message_ID: "6", Room_ID: "2", Sender_ID: "3", Message: "Awesome, thanks!" },
    { Message_ID: "7", Room_ID: "3", Sender_ID: "5", Message: "Anyone want to grab lunch?" },
    { Message_ID: "8", Room_ID: "1", Sender_ID: "2", Message: "Let’s sync after lunch." },
    { Message_ID: "9", Room_ID: "1", Sender_ID: "1", Message: "Sounds good." },
    { Message_ID: "10", Room_ID: "2", Sender_ID: "4", Message: "Build pushed to staging 🚀" },
    { Message_ID: "11", Room_ID: "2", Sender_ID: "3", Message: "Nice work!" },
    { Message_ID: "12", Room_ID: "3", Sender_ID: "5", Message: "No takers? 😅" },
    { Message_ID: "13", Room_ID: "1", Sender_ID: "1", Message: "Anyone seen the new design mockups?" },
    { Message_ID: "14", Room_ID: "1", Sender_ID: "2", Message: "Not yet, where are they?" },
    { Message_ID: "15", Room_ID: "1", Sender_ID: "1", Message: "In the Figma folder: /Design/Q2" }
  ]

module.exports = {
    getMessages,
    sendMessage,
    createUser
}