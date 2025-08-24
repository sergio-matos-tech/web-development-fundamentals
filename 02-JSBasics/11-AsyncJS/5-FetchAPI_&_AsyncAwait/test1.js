
fetch("./movies.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log((data));
})
.catch((err) => {
    console.log(err);
});


fetch("./text.txt")
.then((response) => {
    return response.text();
})
.then((data) => {
    console.log((data));
})
.catch((err) => {
    console.log(err);
});


fetch("https:api.github.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log((data));
})
.catch((err) => {
    console.log(err);
});


async function fetchUsers() {
    try {
        const response = await fetch("https:api.github.com/users");
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

fetchUsers();