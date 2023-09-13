document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const characterNameRaw = document.getElementById('characterName').value;
    const formattedCharacterName = characterNameRaw.charAt(0).toUpperCase() + characterNameRaw.slice(1).toLowerCase();
    const characterClass = document.getElementById('characterClass').value;
    const startingItem = document.getElementById('startingItem').value;
    const characterDescription = document.getElementById('characterDescription').value;

    let alignment = 0;
    alignment += parseInt(document.querySelector('select[name="question1"]').value);
    alignment += parseInt(document.querySelector('select[name="question2"]').value);
    alignment += parseInt(document.querySelector('select[name="question3"]').value);


    // Sauvegardez toutes les données nécessaires dans localStorage pour y accéder plus tard.
    const characterData = {
        name: formattedCharacterName,
        class: characterClass,
        item: startingItem,
        description: characterDescription,
        alignment: alignment,
        gold: startingGold
    };
    localStorage.setItem('characterData', JSON.stringify(characterData));

    // Redirection vers le jeu après la création du personnage (ajustez selon votre structure)
    window.location.href = 'jeux.html';
});
