document.querySelector('.logo-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default click behavior
    document.body.style.opacity = '0'; // Apply fade-out effect
    setTimeout(() => {
        window.location.href = this.href; // Redirect to home
    }, 500); // Delay for effect
});

