document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const characterNameRaw = document.getElementById('characterName').value;
    const formattedCharacterName = characterNameRaw.charAt(0).toUpperCase() + characterNameRaw.slice(1).toLowerCase();
    const characterClass = document.getElementById('characterClass').value;
    const startingItem = document.getElementById('startingItem').value;
    const characterDescription = document.getElementById('characterDescription').value;

    let alignment = 0;
    alignment += parseInt(document.querySelector('select[name="question1"]').value);
    alignment += parseInt(document.querySelector('select[name="question2"]').value);
    alignment += parseInt(document.querySelector('select[name="question3"]').value);

    console.log("Nom du personnage:", formattedCharacterName);
    console.log("Classe du personnage:", characterClass);
    console.log("Objet de départ:", startingItem);
    console.log("Description:", characterDescription);
    console.log("Alignement:", alignment);

    function saveCharacter(event) {
        
    // Ici, vous pouvez ajouter du code pour sauvegarder le personnage ou prendre d'autres mesures.
});
