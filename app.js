const fs = require('fs');


const countFiles = (files) => {
    let count = 0;
    let permitted = /[A-Za-z]/;
    files.map( file => {
        if( permitted.test(file.charAt(0))) {
            count = count + 1;
        }
    });
    console.log(`${count} files were found that begin with a letter.`);
}

fs.readdir('./', (err, files) => {
    try {
        console.log('(1 and 2). Get all files and print => ', files);
        console.log('(3). Reverse order => ', files.sort().reverse());
        console.log('(4). Count all files starting with one letter => ')

        countFiles(files.sort());

    } catch (err) {
        console.log(err);
    }
});


// -------------- shown in class -------------------

// const logger = require('./logger');
// const path = require('path');                                        // The 'path' module provides utilities for working with file and directory paths
// const os = require('os');                                            // The 'os' module provides operating system-related utility methods and properties
// const fs = require('fs');                                            // The 'fs' module provides an API for interacting with the file system.


// let rootDir = fs.readdirSync('./');                                  // async
// fs.readdir('./', (err, files) => {
//     (err) ? console.log(err) : console.log('async', files);
// })

// console.log('sync', rootDir);                                        // sync

// let freeMem = os.freemem();
// let totalMem = os.totalmem();
// let pathObj = path.parse(__filename);

// logger.log(pathObj);
// logger.log(' lucas');

// console.log('free', freeMem );
// console.log('total', totalMem);
// console.log(pathObj);
// console.log(logger);

// -------------------------------------------------