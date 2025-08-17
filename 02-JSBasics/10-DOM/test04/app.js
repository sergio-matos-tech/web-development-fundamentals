
const form = document.getElementById('zibcode')

form.addEventListener('submit', function(event) {
  event.preventDefault() // Prevent the default form submission behavior

  const formData = new FormData(form) // Create a FormData object from the form
  const data = Object.fromEntries(formData.entries()) // Convert FormData to a plain object

  console.log(data) // Log the form data to the console
})