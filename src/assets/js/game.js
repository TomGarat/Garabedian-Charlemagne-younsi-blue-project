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
        title: "Titre événement 1",
        description: "Description événement 1",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Choix 1",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Choix 2",
                qi : -5,
                goldChange: -3
            }
        ]
    },

    {
        title: "Titre événement 1",
        description: "Description événement 1",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Choix 1",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Choix 2",
                qi : -5,
                goldChange: -3
            }
        ]
    },

    {
        title: "Titre événement 2",
        description: "Description événement 2",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Choix 1",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Choix 2",
                qi : -5,
                goldChange: -3
            }
        ]
    },

    {
        title: "Titre événement 3",
        description: "Description événement 3",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Choix 1",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Choix 2",
                qi : -5,
                goldChange: -3
            }
        ]
    },

    {
        title: "Titre événement 4",
        description: "Description événement 4",
        imageUrl: "url1.jpg",
        choices: [
            {
                text: "Choix 1",
                qi : 10,
                goldChange: 5
            },
            {
                text: "Choix 2",
                qi : -5,
                goldChange: -3
            }
        ]
    },
    // ... Ajoutez d'autres événements comme ci-dessus
];

