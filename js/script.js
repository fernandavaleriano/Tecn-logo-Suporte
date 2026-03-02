window.addEventListener('scroll', function() {
    const rodape = document.querySelector('.rodape-container');
    if (!rodape) return;

    const posicaoCursor = window.scrollY + window.innerHeight;
    const alturaRodape = rodape.offsetTop + (rodape.offsetHeight / 2);

    if (posicaoCursor > alturaRodape) {
        rodape.classList.add('visivel');
    }
});