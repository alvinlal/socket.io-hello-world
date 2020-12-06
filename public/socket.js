const socket = io();

socket.on("message", message => {
  alert("ws connections established,the message is " + message);
  socket.emit("newmessage", "hello server, i am a client");
});
