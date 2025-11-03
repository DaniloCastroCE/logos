const numero = new Numero()
const logos = new ArrayLogos()

let elementLogos
let last_num = -1
const createHtmlLogoRandom = () => {
    if (!elementLogos) elementLogos = document.querySelector('.logos-car')
    
    let num
    do {
        num = numero.gerarNumAleatorio(0, logos.marcasCarros.length - 1)
    }while(num === last_num);
    last_num = num
    
    const logo = logos.getLogo(num)
    elementLogos.innerHTML = gerarCodeHtml(logo)
    onClickLogo(() => {createHtmlLogoRandom()})
}

let counter = 0
const createHtmlLogoSequential = () => {
    //console.log(counter)
    if (!elementLogos) elementLogos = document.querySelector('.logos-car')
    const logo = logos.getLogo(counter)
    elementLogos.innerHTML = gerarCodeHtml(logo)
    onClickLogo(() => {createHtmlLogoSequential()})
    counter = counter >= logos.marcasCarros.length - 1 ? 0 : counter + 1;
}


const gerarCodeHtml = (logo) => {
    return `
        <div class="logos-car-box">
            ${logo.svg}
            <div class="content-text">
                <p class="nome">${logo.nome}</p>
                <p class="pais">${logo.pais} <span class="fundacao geral">${logo.fundacao}</span></p>
                <p class="historia geral">${logo.historia}</p>
            </div>
        </div>

    `
}

const onClickLogo = (callback) => {
    const container = elementLogos.querySelector('.logos-car-box');
    if (!container) return;

    const svg = container.querySelector('svg');
    if (!svg || svg._hasListener) return;

    svg.addEventListener('click', () => {
        if(callback) callback()
    });

    svg._hasListener = true;
};

