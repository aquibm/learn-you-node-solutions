'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(directory, fileExtension, callback) {
    fs.readdir(directory, (error, fileList) => {
        if(error) {
            return callback(error);
        }

        const filteredFiles = fileList.filter((file) => {
            return path.extname(file) === '.' + fileExtension;
        });

        callback(null, filteredFiles);
    });
};
