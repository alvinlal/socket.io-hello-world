const express = require("express"); //framework for creating http server
const app = express(); //initialising the server
const socket = require("socket.io"); //for creating the ws server
const PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));
const io = socket(server); //initialising ws server with http server object

io.on("connection", socket => {
  //this code runs when any client makes a connection
  console.log("new ws connection established with a client");
  socket.emit("message", "hello!,welcome"); //emit function sends the client back a message and the frontend has to
  // listen for that message
  socket.on("newmessage", message =>
    console.log("new message from client " + message)
  ); //for listening for message from client
});
