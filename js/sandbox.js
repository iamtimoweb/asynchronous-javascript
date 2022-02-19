/*************************************
 * Using the Request object to make an http request
 *************************************/

getPosts = function (callback) {
    // make a request object
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        // Note: Always check for the readyState === 4 because this is when the request is complete
        if (request.readyState === 4 && request.status === 200) {
            // we receive back json string from the server but we need to change it to regular javascript object
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log("failed to fetch data from the server");
            console.log("failed to fetch data from the server", undefined);
        }
    });
    const endpoint = "http://localhost:3000/posts";

    // Sets the request method, request URL, and synchronous flag.
    request.open("GET", endpoint);

    // Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
    request.send();
};

getPosts((err, data) => {
    console.log("callback is fired");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
