const loading = new Loading('.loading')
const option = 'sequential';

const what_option (op) {
    switch (op) {
        case 'sequential':
            createHtmlLogoSequential();
            break;
        case 'random':
            createHtmlLogoRandom();
            break;
        default:
            break;
    }
}

what_option(option);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        what_option(option);
    }
})

