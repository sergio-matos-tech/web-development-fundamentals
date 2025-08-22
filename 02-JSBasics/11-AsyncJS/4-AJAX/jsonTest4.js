
fetch("https://swapi.info/api/")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(`data = ${JSON.stringify(data)}`);
    console.log("---------------------------------------------------\n");
})
.catch((error) => {
    console.error("Error fetching data:", error);
});



fetch("https://swapi.info/api/planets/17")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(`data = ${JSON.stringify(data)}`);
    console.log("---------------------------------------------------\n");
})
.catch((error) => {
    console.error("Error fetching data:", error);
});


fetch("https://swapi.info/api/vehicles/71")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(`Name of the Vehicle = ${JSON.stringify(data.name)}`);
    console.log(`Model of the Vehicle = ${JSON.stringify(data.model)}`);
    console.log("---------------------------------------------------\n");
})
.catch((error) => {
    console.error("Error fetching data:", error);
});
