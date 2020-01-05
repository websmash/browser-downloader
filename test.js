const {BrowserDownloader} = require('./dist');
const {sep} = require('path');

new BrowserDownloader('win64', 'chromium', '389148', `.${sep}test`)
    .download()
    .then((path) => {
        console.log(path);
    })
    .catch((err) => {
        console.log(err);
    });