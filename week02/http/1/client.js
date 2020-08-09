const net = require('net');

class Request {
    constructor(options) {
        this.method = options.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/';
        this.body = options.body || {};
        this.headers = options.headers || {};
        if(!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        
        if(this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body);
        } else if(this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body).map(key => {
                return `${key}=${encodeURIComponent(this.body[key])}`;
            }).join('&');
        }

        this.headers['Content-Length'] = this.bodyText.length; // 不推荐从外部传入

    }

    send() {
        return new Promise((resolve, reject) => {
            // ......
        })
    }
}

void async function() {
    let request = new Request({
        method: 'POST', // http层
        host: '127.0.0.1', // IP层
        port: '8084', // TCP层
        path: '/', // http层
        headers: {
            ['X-Foo2']: 'customed'
        },
        body: {
            name: 'yux'
        }
    });

    let response = await request.send();

    console.log(response);
}();