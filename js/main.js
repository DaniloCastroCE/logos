const loading = new Loading('.loading')

createHtmlLogoRandom()


window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        createHtmlLogoRandom()
    }
})

