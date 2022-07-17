process.env.UV_THREADPOOL_SIZE = 5;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = performance.now();

function doRequest() {
    https
        .request('https://www.google.com', (res) => {
            res.on('data', () => {});
            res.on('end', () => {
                console.log(performance.now() - start);
            });
        })
        .end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash: ', performance.now() - start);
    });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('fs:', performance.now() - start);
});

doHash();
doHash();
doHash();
doHash();
