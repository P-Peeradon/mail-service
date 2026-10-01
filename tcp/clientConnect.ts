import net from "node:net";

const client = net.createConnection({ port: 3000, host: "127.0.0.1" }, () => {
    console.log("Connected to server");
    client.write("Hello from TCP client!\r\n");}
);

// When server send data back to the event
client.on("data", (data) => {
    console.log(`Received data: ${data}`);
    client.end(); // Close the connection after receiving data
});