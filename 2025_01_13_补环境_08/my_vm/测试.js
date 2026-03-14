var request = require('sync-request');
var res = request('POST', 'http://127.0.0.1:8000/post', {
    body:"a=b",
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    }
});
console.log(res);
