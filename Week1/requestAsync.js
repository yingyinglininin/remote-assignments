const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Callback
function requestCallback(url, callback) {
    // write code to request url asynchronously
    const startTime = new Date().getTime();
    const request = new XMLHttpRequest();
    request.open("GET", url, true); // `true` makes the request asynchronous
    request.onload = (e) => {
    if (request.readyState === 4) {
        if (request.status === 200) {
            // const responseJson = JSON.parse(request.responseText);
            // const data = responseJson.data;
            const endTime = new Date().getTime();
            const executionTime = endTime - startTime;
            callback(executionTime)
        } else {
            console.error(request.statusText);
        }
      }
    };
    request.onerror = (e) => {
      console.error(request.statusText);
    };
    request.send(null);
}

// Promise
function requestPromise(url) {
    // write code to request url asynchronously with Promise
    const startTime = new Date().getTime();
    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        request.open("GET", url, true); // `true` makes the request asynchronous
        request.onload = (e) => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                // const responseJson = JSON.parse(request.responseText);
                // const data = responseJson.data;
                const endTime = new Date().getTime();
                const executionTime = endTime - startTime;
                resolve(executionTime)
            } else {
                reject(request.statusText);
            }
        }
        };
        request.send(null);
    })

}

// Async/Await
async function requestAsyncAwait(url) {
    // write code to request url asynchronously
    // you should call requestPromise here and get the result using async/await.
    try {
        const val = await requestPromise(url);
        console.log(val);
    } catch (error) {
        console.error(error.message);
    }
}

requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);