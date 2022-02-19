/*************************************
 * Using the Request object to make an http request
 *************************************/

getPosts = function (resource) {
    return new Promise((resolve, reject) => {
        // make a request object
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            // Note: Always check for the readyState === 4 because this is when the request is complete
            if (request.readyState === 4 && request.status === 200) {
                // we receive back json string from the server but we need to change it to regular javascript object
                const data = JSON.parse(request.responseText);
                // returning the resolved data
                resolve(data);
            } else if (request.readyState === 4) {
                reject("failed to fetch data from the server");
            }
        });

        // Sets the request method, request URL, and synchronous flag.
        request.open("GET", resource);

        // Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
        request.send();
    });
};

// now the function returns a promise, we should attach the then() method to execute the callback function
getPosts(" http://localhost:3000/posts")
    .then((data) => {
        console.log("promise 1 resolved\n", data);
        return getPosts(" http://localhost:3000/students");
    })
    .then((data) => {
        console.log("promise 2 resolved\n", data);
        return getPosts(" http://localhost:3000/songs");
    })
    .then((data) => {
        console.log("promise 3 resolved\n", data);
    })
    .catch((err) => console.log("promise rejected\n", err));
