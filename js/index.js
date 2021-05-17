const inputES = document.getElementById('borda_esquerda-superior');
const inputEI = document.getElementById('borda_esquerda-inferior');
const inputDS = document.getElementById('borda_direita-superior');
const inputDI = document.getElementById('borda_direita-inferior');
const botao = document.getElementById('alterar');
const caixa = document.getElementById('box');

botao.addEventListener('click', (e) => {
    e.preventDefault();
    inputES.value;
    caixa.style.borderRadius = `${inputES.value}px ${inputEI.value}px ${inputDI.value}px ${inputDS.value}px`;
})



