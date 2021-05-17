const inputES = document.getElementById('borda_esquerda-superior');
const inputEI = document.getElementById('borda_esquerda-inferior');
const inputDS = document.getElementById('borda_direita-superior');
const inputDI = document.getElementById('borda_direita-inferior');
const code = document.getElementById('code');
const caixa = document.getElementById('box');


const inputs = [inputES, inputEI, inputDS, inputDI];

inputES.focus();

inputs.forEach(input => {
    input.addEventListener('change', () => {
        switch (input.id) {
            case 'borda_esquerda-inferior':
                box.style.borderBottomLeftRadius = `${input.value}px`;
                break;
            case 'borda_esquerda-superior':
                box.style.borderTopLeftRadius = `${input.value}px`;
                break;
            case 'borda_direita-inferior':
                box.style.borderBottomRightRadius = `${input.value}px`;
                break;
            case 'borda_direita-superior':
                box.style.borderTopRightRadius = `${input.value}px`;
                break;
        }
        code.textContent = `border-radius: ${inputES.value}px ${inputEI.value}px ${inputDI.value}px ${inputDS.value}px`
    })
})

code.textContent = `border-radius: ${inputES.value}px ${inputEI.value}px ${inputDI.value}px ${inputDS.value}px`
