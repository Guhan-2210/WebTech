function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value);

    // Check if name is not empty
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      alert('Please enter a valid name with only characters (letters).');
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if age is a number and is between 18 and 100
    if (isNaN(age) || age < 18 || age > 100) {
      alert('Please enter a valid age between 18 and 100.');
      return;
    }

    // If all validations pass, show a confirmation dialog
    const confirmation = confirm('Do you want to submit the form?');
    if (confirmation) {
      // Perform form submission or any other action here
      // For demonstration purposes, we will just show a response alert
      alert('Form submitted successfully!');
    }
  }