



   
document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('contact-form').addEventListener('submit', function(e) {

        e.preventDefault(); // Prevent the default form submission

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };
        alert('Thank you for your message! I will get back to you soon.'); // Display an alert message


        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.text())
        .then(data => {
            alert('Thank you for your message! I will get back to you soon.'); // Display an alert message
            document.getElementById('contact-form').reset(); // Reset the form fields
        })
        .catch(error => console.error('Error:', error));
    });
});
