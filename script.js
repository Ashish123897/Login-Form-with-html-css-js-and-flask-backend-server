document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/login', 
        {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (response.ok) {
        window.location.href = 'https://www.linkedin.com/in/ashish-dixit-779b08297'; // Redirect to the given URL
    } else {
        alert(result.message); // Login failed
    }
});
