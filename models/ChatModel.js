

function getMessages(roomId){
    //db query can go here, using an in memory model for now
    //sorting messages by message id will let us put them in the order they were sent 
    const postQueryMessages = messages.filter(message => message.Room_ID == roomId); 
    return postQueryMessages; 
}

function sendMessage(senderId, roomId, message){
    //db query here
    const newMsg = {Message_ID: messages.length, Room_ID: roomId, Sender_ID: senderId, Message: message}; 
    messages.push(newMsg); 
    console.log("new message: " + newMsg); 
    console.lot("all messages: " + message); 
}

  const users = [
    { UserID: 101, Room_ID: 1 },
    { UserID: 102, Room_ID: 1 },
    { UserID: 103, Room_ID: 2 },
    { UserID: 104, Room_ID: 2 },
    { UserID: 105, Room_ID: 3 }
  ];
  
  const messages = [
    { Message_ID: 1, Room_ID: 1, Sender_ID: 101, Message: "Hey everyone!" },
    { Message_ID: 2, Room_ID: 1, Sender_ID: 102, Message: "Hello! How's your day?" },
    { Message_ID: 3, Room_ID: 1, Sender_ID: 101, Message: "Pretty good, thanks!" },
    { Message_ID: 4, Room_ID: 2, Sender_ID: 103, Message: "Who's pushing the new build?" },
    { Message_ID: 5, Room_ID: 2, Sender_ID: 104, Message: "I am. Just finishing QA." },
    { Message_ID: 6, Room_ID: 2, Sender_ID: 103, Message: "Awesome, thanks!" },
    { Message_ID: 7, Room_ID: 3, Sender_ID: 105, Message: "Anyone want to grab lunch?" },
    { Message_ID: 8, Room_ID: 1, Sender_ID: 102, Message: "Let’s sync after lunch." },
    { Message_ID: 9, Room_ID: 1, Sender_ID: 101, Message: "Sounds good." },
    { Message_ID: 10, Room_ID: 2, Sender_ID: 104, Message: "Build pushed to staging 🚀" },
    { Message_ID: 11, Room_ID: 2, Sender_ID: 103, Message: "Nice work!" },
    { Message_ID: 12, Room_ID: 3, Sender_ID: 105, Message: "No takers? 😅" },
    { Message_ID: 13, Room_ID: 1, Sender_ID: 101, Message: "Anyone seen the new design mockups?" },
    { Message_ID: 14, Room_ID: 1, Sender_ID: 102, Message: "Not yet, where are they?" },
    { Message_ID: 15, Room_ID: 1, Sender_ID: 101, Message: "In the Figma folder: /Design/Q2" }
  ]

module.exports = {
    getMessages,
    sendMessage
}