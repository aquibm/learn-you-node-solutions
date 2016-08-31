'use strict';

const filteredLs = require('./filtered-ls');

if(process.argv.length < 4) {
    console.log('Please specify a path and a filter parameter');
    return;
}

filteredLs(process.argv[2], process.argv[3], (error, files) => {
    if(error) {
        console.error(error);
        return;
    }

    files.forEach((file) => {
        console.log(file);
    });
});
