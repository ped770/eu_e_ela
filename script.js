// Função para calcular o tempo desde 4 de outubro de 2024
function updateTimer() {
    const startDate = new Date('2024-10-04T00:00:00'); // Data de referência
    const now = new Date(); // Hora atual
    const diff = now - startDate; // Diferença em milissegundos
    
    // Convertendo para horas, minutos e segundos
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualizando o contador no elemento HTML
    document.getElementById('timer').innerText = `Estamos juntos desde 04 de outubro de 2024, há exatas ${hours} horas, ${minutes} minutos e ${seconds} segundo(s)`;
}

// Atualizar o contador a cada segundo
setInterval(updateTimer, 1000);

let currentImageIndex = 0;
const images = [
    'image1.png', 
    'image2.jpg', 
    'image3.jpg', 
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
]; // Substitua pelos caminhos reais das imagens

// Exibe a imagem no modal
function showModal(imageIndex) {
    currentImageIndex = imageIndex;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = images[currentImageIndex];
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Muda a imagem no modal
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Associa as imagens da galeria com a abertura do modal
const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => showModal(index));
});
