
function getRooms(){
    //db query here
    const rooms = chatRooms; 
    return rooms; 
}
function createRoom(name){
    const room = {Room_ID: chatRooms.length + 1, Room_Name: name}; 
    chatRooms.push(room); 
}

const chatRooms = [
    { Room_ID: 1, Room_Name: "General" },
    { Room_ID: 2, Room_Name: "Dev Chat" },
    { Room_ID: 3, Room_Name: "Random" }
  ];

module.exports = {
    getRooms, 
    createRoom
}
