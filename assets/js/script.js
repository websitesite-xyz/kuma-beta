function openModal() {
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// 클릭하면 닫히게
document.getElementById('modal-overlay').addEventListener('click', closeModal);