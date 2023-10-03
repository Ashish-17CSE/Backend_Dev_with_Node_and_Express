const timeSlots = document.querySelectorAll('.container');
const bookingForm = document.getElementById('bookingForm');

timeSlots.forEach((slot) => {
    slot.addEventListener('click', () => {
        // Display the booking form
        bookingForm.style.display = 'block';
    });
});


bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    // Get the form data
    const formData = new FormData(bookingForm);
    const name = formData.get('UserName');
    const email = formData.get('UserEmail');
    // Send the data to your server for database storage
    submitDataToServer(name, email);
    // Hide the booking form after submission
    bookingForm.style.display = 'none';
    // reset the form
    bookingForm.reset();
});

function submitDataToServer(name, email) {
    fetch('/meeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Data saved successfully.');
            } else {
                console.error('Error saving data.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

