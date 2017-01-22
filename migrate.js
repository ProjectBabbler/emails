let admin = require("./firebase");
let emailRef = admin.database().ref('emails');

let parseResults = require('./scrapedemail.json');
let ps = parseResults.results.map(result => {
    return;
    return emailRef.child(result.email).set(true);
});

Promise.all(ps).then(() => {
    process.exit(0);
}).catch((e) => {
    console.log(e);
    process.exit(1);
})