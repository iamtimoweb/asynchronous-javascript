fetch("http://localhost:3000/songs")
    .then((res) => {
        console.log("promise resolved \n", res);
        // json() returns the javascript object from json string
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log("error resolved \n", err);
    });
