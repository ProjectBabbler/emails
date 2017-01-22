var admin = require("firebase-admin");

var config = {
    credential: admin.credential.cert({
        projectId: "birder-emails",
        clientEmail: "firebase-adminsdk-8dshl@birder-emails.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: "https://birder-emails.firebaseio.com",
};
admin.initializeApp(config);

module.exports = admin;