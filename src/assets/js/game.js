class Player {
    constructor(username) {
        this.username = username;
        this.qi = 0;
        this.gold = 0;
        this.inventory = [];
    }

    addGold(amount) {
        this.gold += amount;
    }

    substractGold(amount) {
        this.gold += amount;
    }

    addQi(amount) {
        this.qi += amount;
    }

    substractQi(amount) {
        this.qi += amount;
    }
}

const events = [
    {
        title: "Histoire",
        description: "Quand a eu lieu la révolution française ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "1689",
                qi : -20,
                goldChange: -5
            },
            {
                text: "1789",
                qi : 10,
                goldChange: 10
            }
        ]
    },

    {
        title: "Littérature",
        description: "Qui a écrit Roméo et Juliette ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Dickens",
                qi : -10,
                goldChange: -5
            },
            {
                text: "Shakespeare",
                qi : 5,
                goldChange: 3
            }
            
        ]
    },

    {
        title: "Artistique",
        description: "Qui a peint la Joconde ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Vincent van Gogh",
                qi : -30,
                goldChange: -10
            },
            {
                text: "Leonard de Vinci",
                qi : 30,
                goldChange: 8
            }
        ]
    },

    {
        title: "Informatique",
        description: "Que signifie AES ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Advanced Encryption Standard",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Achat Electonique Système",
                qi : -20,
                goldChange: -7
            }
        ]
    },

    {
        title: "Football",
        description: "Combien de Champion's Ligue à gagner le Real Madrid",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "14",
                qi : 10,
                goldChange: 5
            },
            {
                text: "12",
                qi : -5,
                goldChange: -3
            }
        ]
    },
    {
        title: "Géographie",
        description: "Quelle est la capitale de la France",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Paris",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Lyon",
                qi : -30,
                goldChange: -20
            }
        ]
    },
    {
        title: "Culture",
        description: "Ou se trouve le Colisée ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Rome",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Turin",
                qi : -5,
                goldChange: -20
            }
        ]
    },
    {
        title: "Musique",
        description: "Qui est le pianiste parmi ces 2 personnes ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Carlsen",
                qi : -10,
                goldChange: -5
            },
            {
                text: "Beethoven",
                qi : 15,
                goldChange: 20
            }
        ]
    },
    {
        title: "Nourriture",
        description: "Qui a inventé les frites ?",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "France",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Belgique",
                qi : -15,
                goldChange: -20
            }
        ]
    },
];

