

class Memorama {

    constructor() {

        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImages = [1, 2, 3, 4, 5, 6, 7, 8];
        this.orderForThisRound = [];
        this.cards = Array.from( document.querySelectorAll(".board-game figure") );

        this.maxPairNumber = this.availableImages.length;

        this.startGame();

    }

    startGame() {

        this.foundPairs = 0;
        this.setNewOrder();
        this.setImagesInCards();
        this.openCards();

    }

    setNewOrder() {

        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort( () => Math.random() - 0.5 );

    }

    setImagesInCards() {

        for (const key in this.cards) {
            
            const card = this.cards[key];
            let num = this.orderForThisRound[key];
            const image = "Carta0" + num;
            const imgLabel = card.children[1].children[0];
            console.log(image);
            

            card.dataset.image = image;
            imgLabel.src = `../img/${image}.png`;

        }

    }

    openCards() {

        this.cards.forEach(card => card.classList.add("opened"));

        setTimeout(() => {
            this.closeCards();
        }, 10000);

    }

    closeCards() {

        this.cards.forEach(card => card.classList.remove("opened"));
        this.addClickEvents();
        this.canPlay = true;

    }

    addClickEvents() {

        this.cards.forEach(_this => _this.addEventListener("click", this.flipCard.bind(this)));

    }

    removeClickEvents() {

        this.cards.forEach(_this => _this.removeEventListener("click", this.flipCard));

    }

    flipCard(e) {

        const clickedCard = e.target;

        if (this.canPlay && !clickedCard.classList.contains("opened")) {
            
            clickedCard.classList.add("opened");
            this.checkPair( clickedCard.dataset.image );

        }

    }

    checkPair(image) {

        if (!this.card1) this.card1 = image;
        else this.card2 = image;

        if (this.card1 && this.card2) {
            
            if (this.card1 == this.card2) {

                this.canPlay = false;
                setTimeout(this.checkIfWon.bind(this), 300)
                
            }
            else {

                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this), 800)

            }

        }

    }

    resetOpenedCards() {
        
        const firstOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card1}']`);
        const secondOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card2}']`);

        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");

        this.card1 = null;
        this.card2 = null;

        this.canPlay = true;

    }

    checkIfWon() {

        this.foundPairs++;

        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;

        if (this.maxPairNumber == this.foundPairs) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Has guanyat!',
                showConfirmButton: false,
                timer: 1500
                })
            this.setNewGame();
            
        }

    }

    setNewGame() {

        this.removeClickEvents();
        this.cards.forEach(card => card.classList.remove("opened"));

        setTimeout(this.startGame.bind(this), 1000);

    }

}

function generarTablero() {

    new Memorama();

};

let consejos = [
    "Separa les escombraries.",
    "Apaga els llums.",
    "Desendolla el que no s'estigui fent servir.",
    "Tanca correctament les aixetes.",
    "Utilitza bosses reutilitzables.",
    "Utilitza bombetes LED.",
    "Reutilitza.",
    "Evita utilitzar piles.",
    "Evita els aerosols.",
    "Consumeix productes de temporada.",
    "Utilitza el transport públic.",
    "Porta els medicaments caducats a la farmàcia.",
    "Aneu caminant sempre que pugueu.",
    "Tanca la aixeta quan et rentis els dents.",
    "Estableix un temps de dutxa.",
    "Surt mes a donar una volta, utilitza menys la tecología.",
    "Utilitza recipents de vidre, en comptes dels de plàstic.",
    "No llencis qualsevol líquid pel desguàs, l'aigua es contamina molt fàcilment.",
    "Si vas de passeig, recorda't d'emportar-te les restes.",
    "Sabies que l`aigua de bullir es pot utilitzar per regar plantes? fins i tot és millor."
];

function footer() {
    let verConsejo = consejos[Math.floor(Math.random() * consejos.length)];
    document.getElementById("footer").innerHTML = verConsejo;
}

let cambioConsejo = setInterval(footer, 5000);