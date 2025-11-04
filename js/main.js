const loading = new Loading('.loading')

const what_option = (op) => {
    switch (op) {
        case 'sequential':
            createHtmlLogoSequential();
            break;
        case 'random':
            createHtmlLogoRandom();
            break;
        default:
            innerModo()
            break;
    }
}

if(loop) choose_loop()
else what_option();

window.addEventListener('keydown', (e) => {
    if(loop) return
    if (e.key === 'Enter' || e.key === ' ') {
        what_option();
    }
})


