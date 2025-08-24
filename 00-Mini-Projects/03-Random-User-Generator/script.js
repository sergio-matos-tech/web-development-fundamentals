
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
           displayUser(data.results[0]);
        })
        .catch(error => console.error('Error fetching user:', error));
}

fetchRandomUser();

function displayUser(user) {
    const userDisplay = document.getElementById('user');
    if (user.gender === 'female') {
        document.body.style.backgroundColor = '#ee8bbe92';
    } else {
        document.body.style.backgroundColor = '#71b5f4d4';
    }

    userDisplay.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <br>
        <h2>${user.name.first} ${user.name.last}</h2>
        <br>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
}

document.querySelector('#generate').addEventListener('click', fetchRandomUser);