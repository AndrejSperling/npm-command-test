
var mkdirp = require('mkdirp');

function makeConsoleOutput(){
	console.log("Hey!!!")
}

function buildWebApp(){
	mkdirp('/public/folder', function (err) {
		if (err) console.error(err)
		else console.log('pow!')
	});
}

module.exports = {
    makeConsoleLog: makeConsoleOutput,
    buildWebApp: buildWebApp
};