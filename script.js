document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Terima kasih, ${name}! Kami akan menghubungi Anda di ${email}.`);
});
