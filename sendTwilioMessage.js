// import dotenv
require('dotenv').config()
// set up environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// require twilio
const client = require('twilio')(accountSid, authToken);
// set up recipient
const recipient = '+18572611633';
// regex to validate phone number
const validatePhone = (phone) => {
    const regex = /^\+?(\d{1,3})?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
    return regex.test(phone);
}
// method to send text message
const sendText = (to, body) => {
client.messages
      .create({body: body, from: '+18155690758', to: to})
    .then(message => console.log('sent text that says:' + body));
}
// send message if phone number is valid
validatePhone(recipient) ? sendText(recipient, 'I\'m at GitHub Universe 2022!!!') : console.log('invalid phone number');