
fetch('https://httpstat.us/201')
    .then(response => {
        console.log('Status Code:', response.status);
        return response.text();
    })
    .then(data => {
        console.log('Response Body:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });



    