const http = require('http');
const bl = require('bl');

module.exports = {
    get(endpoint) {
        const promise = new Promise((resolve, reject) => {
            http.get(endpoint, (response) => {
                response.pipe(bl((error, data) => {
                    if(error) {
                        return reject(error);
                    }

                    return resolve(data.toString());
                }));
            });
        });

        return promise;
    }
};
