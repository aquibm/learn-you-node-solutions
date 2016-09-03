const requestor = require('./requestor.js');

if(process.argv.length < 5) {
    console.log('Please specify 3 endpoints');
    return;
}

const emptyPromise = new Promise(resolve => resolve());

emptyPromise.then(() => {
    return printResponse(process.argv[2]);
}).then(() => {
    return printResponse(process.argv[3]);
}).then(() => {
    return printResponse(process.argv[4]);
});

function printResponse(endpoint) {
    return requestor.get(endpoint).then((response) => {
        console.log(response);
    });
}
