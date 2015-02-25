var messageContent = {
  to:       'icecomm.io@gmail.com',
  from:     'icecomm.io@gmail.com',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
};

var mailCreator = {};
mailCreator.createUpdateEmail = createUpdateEmail;

function createUpdateEmail(total, unique) {
    var text = "Total Connections:\n\n" + total + "\n\nUnique users:\n\n" + unique;
    var subject = "Icecomm update Email";
    messageContent.text = text;
    messageContent.subject = subject;

    return messageContent;
}

module.exports = mailCreator;