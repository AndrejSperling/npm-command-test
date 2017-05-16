const mkdirp = require('mkdirp');
const path = require('path');


function makeConsoleLog() {
    console.log("Hey!!!")
    console.log("Du befindest dich gerade hier: " + process.cwd())
}

function buildWebApp() {
    const folder = path.resolve(process.cwd(), './public');
    mkdirp(folder, function (err) {
        if (err) console.error(err)
        else console.log('Created Folder: ' + folder)
    });
}

module.exports = {
    makeConsoleLog: makeConsoleLog,
    buildWebApp: buildWebApp
};