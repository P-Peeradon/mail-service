import { SMTPServer } from 'smtp-server';

const mailServer = new SMTPServer({
    disabledCommands: ['AUTH'],

    onMailFrom(address, session, callback) {
        console.log('MAIL FROM:', address.address)
        callback() // Accept the sender address
    },

    onRcptTo(address, session, callback) {
        console.log('RCPT TO:', address.address)
        callback() // Accept the recipient address
    },

    onData(stream, session, callback) {
        let emailData = '';
        stream.on('data', (chunk) => {
            emailData += chunk.toString();
        });

        stream.on('end', () => {
            console.log('Email data received:');
            console.log(emailData);
            callback(); // Accept the email data
        });
    }
});

mailServer.listen(2500, "127.0.0.1", () => {
    console.log("SMTP Server is running on port 2500");
})

export default mailServer;