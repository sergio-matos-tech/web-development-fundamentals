
const currentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${position.coords.accuracy} meters`);
    });
};

currentPosition();