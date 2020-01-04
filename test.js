const {BrowserDownloader} = require('./dist');

new BrowserDownloader('win64', 'chromium', '389148', './')
    .download()
    .then((path) => {
        console.log(path);
    })
    .catch((err) => {
        console.log(err);
    });