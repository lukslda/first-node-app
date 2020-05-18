const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');


let rootDir = fs.readdirSync('./'); //async
fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log(files);
})

console.log(rootDir); //sync


// let freeMem = os.freemem();
// let totalMem = os.totalmem();


// console.log('free', freeMem );
// console.log('total', totalMem);

// let pathObj = path.parse(__filename);


// logger.log(pathObj);
// console.log(pathObj);
// console.log(logger);
// logger.log(' lucas');
