import net from "node:net";

// This code will be standard for TCP socket connections for every protocols that need TCP.
const server = net.createServer((socket) => {
    console.log("TCP Connected");
    socket.write("Hello from TCP server!\r\n");

    // When client send data through TCP socket -> trigger data event.
    socket.on("data", (data) => {
        console.log(`Received data: ${data}`);
        socket.write(`Echo: ${data}`);
    });

    // When client disconnects from TCP socket -> trigger end event.
    socket.on("end", () => {
        console.log("TCP Disconnected");
    });
});

server.listen(3000, "127.0.0.1", () => {
    console.log("TCP Server is running on port 3000");
})