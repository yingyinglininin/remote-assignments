const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function requestSync(url) {
    // write code to request url synchronously
    const startTime = new Date().getTime();
    const request = new XMLHttpRequest();
    request.open("GET", url, false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        // const responseJson = JSON.parse(request.responseText);
        // const endTime = responseJson.data;
        const endTime = new Date().getTime();
        console.log(endTime - startTime);
    } else {
        console.error(request.status);
    }
}
requestSync(url) // would print out the execution time
requestSync(url)
requestSync(url)
