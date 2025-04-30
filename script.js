function openMailbox() {
    const mailbox = document.querySelector('.mailbox');
    const letter = document.getElementById('letter');

    mailbox.style.display = 'none';
    letter.classList.remove('hidden');
}

function showMessage() {
    const letter = document.getElementById('letter');
    const message = document.getElementById('message');

    letter.style.display = 'none';
    message.classList.remove('hidden');
}