function displayUsers() {
    console.log("(script.js) Fetching user data...");

    fetch('/users')
        .then(response => response.json())
        .then(users => {
            const userListContainer = document.querySelector('tbody');
            userListContainer.innerHTML = '';
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.ID}</td>
                    <td>${user.UserName}</td>
                    <td>${user.PhoneNumber}</td>
                    <td>${user.Email}</td>
                    <td><button class="edit" id="edit" userId="${user.ID}">Edit</button></td>
                    <td><button class="delete" id="delete" userId="${user.ID}">Delete</button></td>
                `;
                userListContainer.appendChild(row);
                // Add event listeners for delete and edit buttons
                const deleteButtons = document.querySelectorAll('.delete');
                const editButtons = document.querySelectorAll('.edit');

                deleteButtons.forEach(button => {
                    button.addEventListener('click', deleteUser);
                });

                editButtons.forEach(button => {
                    button.addEventListener('click', editUser);
                    button.addEventListener('click', deleteUser);
                });
            });
        })
        .catch(error => console.log(error));
}


function editUser(event) {
    const userId = event.target.getAttribute('userId');
    const userRow = event.target.closest('tr'); // Get the parent row of the clicked button

    // Assuming your table structure has a consistent format, you can access the user data cells like this:
    const userName = userRow.cells[1].textContent;
    const phoneNumber = userRow.cells[2].textContent;
    const email = userRow.cells[3].textContent;

    // Now, you can populate the input fields with the user data
    document.getElementById("UserName").value = userName;
    document.getElementById("PhoneNumber").value = phoneNumber;
    document.getElementById("Email").value = email;
}

function deleteUser(event) {
    const userId = event.target.getAttribute('userId');
    fetch(`/users/${userId}`, {
        method: 'POST'
    })
        .then(response => {
            if (response.ok) {
                console.log('User deleted');
                displayUsers(); // Refresh the user list
            } else {
                console.log('Error deleting user from script.js');
            }
        })
        .catch(error => console.error(error));
}

// Call the displayUsers function when the page loads
console.log("Event listener is set up.");
window.addEventListener('load', displayUsers);

displayUsers();