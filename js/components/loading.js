class Loading {
    constructor(ident) {
        this.div = document.querySelector(ident);
        this.qt = {
            min: 1,
            max: 8,
        }
        this.frasesLoading = [
            "Carregando… segure firme",
            "Quase lá, paciência",
            "Só mais um pouco",
            "Aguardando com estilo",
            "Pronto… ou quase",
            "Calma, vem coisa boa",
            "Esperando… respire fundo",
            "Segurando a ansiedade",
            "Quase, quase pronto",
            "Não pisque agora",
            "Café ajuda, continue",
            "Segure essa emoção",
            "Quase chegando aí",
            "Respire… estamos quase",
            "Preparando algo incrível",
            "Não se apresse",
            "Contando segundos lentos",
            "Esperando com amor",
            "Quase na linha de chegada",
            "Segure a empolgação",
            "Carregando magia...",
            "Respira fundo",
            "Só mais instantes",
            "Não perca a fé",
            "Quase lá!",
            "Segure firme aí",
            "Calma… estamos quase",
            "Pouco mais, promessa",
            "Fique tranquilo",
            "Está quase pronto",
            "Preparando surpresas",
            "Respire e espere",
            "Segure a ansiedade",
            "Quase pronto, relaxe",
            "Está carregando devagar",
            "Não desligue ainda",
            "Carregando com amor",
            "Segure seu coração",
            "Quase, só um pouco",
            "Respire e sorria",
            "Preparando algo legal",
            "Aguarde pacientemente",
            "Respire fundo agora",
            "Estamos quase lá",
            "Só mais segundos",
            "Não saia daí",
            "Segure a empolgação",
            "Calma, quase pronto",
            "Quase na reta final",
            "Não pisque agora",
            "Respira fundo… já já",
            "Segure firme, vai",
            "Carregando diversão",
            "Quase carregado",
            "Só um instante",
            "Está chegando aí",
            "Segure a ansiedade",
            "Respire fundo, calma",
            "Pouco mais, já já",
            "Estamos quase prontos",
            "Calma, aguarde",
            "Quase pronto, relaxe",
            "Segure firme, respire",
            "Respire fundo, espera",
            "Só mais um segundo",
            "Está quase lá",
            "Aguarde com paciência",
            "Respira e espera",
            "Segure, vai valer",
            "Calma, está chegando",
            "Pouco mais… espere",
            "Estamos quase lá",
            "Segure, está vindo",
            "Respira, quase pronto",
            "Quase carregado, respire",
            "Só mais uns segundos",
            "Aguarde… quase pronto",
            "Calma, está carregando",
            "Respira fundo, quase",
            "Segure… vai valer",
            "Pouco mais, aguarde",
            "Estamos quase lá",
            "Quase, só aguarde",
            "Respire… estamos carregando",
            "Carregando com paciência",
            "Segure a emoção",
            "Calma, quase pronto",
            "Pouco mais e pronto",
            "Segure firme, respire",
            "Respira fundo, aguarde",
            "Quase lá, aguarde",
            "Só mais uns instantes",
            "Estamos quase prontos",
            "Respire fundo… calma",
            "Segure… quase lá",
            "Calma, só um pouco",
            "Pouco mais e pronto",
            "Quase, está chegando",
            "Aguarde, já já",
            "Respira fundo, quase",
            "Segure firme, quase pronto",
            "Carregando… já já",
            "Pouco mais… calma",
            "Quase pronto, respire",
            "Estamos chegando aí",
            "Respire fundo, aguarde",
            "Segure firme, vai valer",
            "Calma, falta pouco",
            "Quase carregado, respire",
            "Pouco mais, já já",
            "Segure, vai ficar bom",
            "Respire fundo… estamos lá"
        ];
    }
    show() {
        if (!this.div.classList.contains('showLoading')) {
            this.modify_src()
            this.div.style.display = 'flex';
            setTimeout(() => {
                this.div.classList.add('showLoading');
            }, 100)
        }
    }
    hide() {
        if (this.div.classList.contains('showLoading')) {
            this.div.classList.remove('showLoading');
            setTimeout(() => {
                this.div.style.display = 'none';
            }, 1000)
        }
    }
    toggle() {
        if (this.div.classList.contains('showLoading')) {
            this.div.classList.remove('showLoading');
            setTimeout(() => {
                this.div.style.display = 'none';
            }, 1000)
        } else {
            this.modify_src()
            this.div.style.display = 'flex';
            setTimeout(() => {
                this.div.classList.add('showLoading');
            }, 100)
        }
    }
    modify_src(min, max) {
        if (!min) min = this.qt.min
        if (!max) max = this.qt.max

        const tagImg = this.div.querySelector('img')
        const tagP = this.div.querySelector('p')
        const num = (Math.floor(Math.random() * (max - min + 1)) + min).toString().padStart(2, '0')

        const objImg = new Image()

        objImg.onload = () => { 
            tagImg.src = objImg.src
            if(tagP) tagP.textContent = this.frases()
        }

        objImg.onerror = () => { console.error(`Imagem não existente.\n\nsrc: ${objImg.src}`) }

        objImg.src = `./img/loading/loading${num}.gif`

    }

    frases() {
        const num = Math.floor(Math.random() * this.frasesLoading.length)

        return `${this.frasesLoading[num]} ...`
    }
}
