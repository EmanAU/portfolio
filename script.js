// Initialize EmailJS with your Public Key
emailjs.init('LjdQJAYNekN2z2A9K'); // Your provided public key

// Form Submission Event Listener
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email via EmailJS
    emailjs.send("service_w6jd4zl", "template_dpf74cq", {
        name: name,
        email: email,
        message: message,
    }).then(
        function (response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            alert("Failed to send email. Please try again.");
            console.log("FAILED...", error);
        }
    );
});
