getSongs = async function () {
    const response = await fetch("http://localhost:3000/songss");

    if (response.status !== 200) {
        throw new Error("Failed to fetch data from resource");
    }

    // use the json() to return a native javascript object
    const songs = await response.json();

    // return the songs objects
    return songs;
};

// the getSongs() returns a promise and therefore we should attach the then() method on it

getSongs()
    .then((data) => console.log("resolved \n", data))
    .catch((err) => console.log("rejected \n", err.message));
