var largura = window.screen.width;

if (largura <= 480) {
    const programaGerado = document.getElementById('programa');
    const sobre = document.querySelector('.sobre');

    const ajustarMargem = () => {
        sobre.style.marginTop = `${programaGerado.offsetHeight}px`;        
    };
    document.getElementById('comando').addEventListener('input', ajustarMargem);
}