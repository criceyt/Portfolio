
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex'; 
    modalImage.src = src; 
}
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Ocultar el modal
}
