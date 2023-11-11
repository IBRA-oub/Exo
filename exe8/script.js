







function addTask() {

    const tacheInput = document.getElementById('tacheInput');
    const tachesList= document.getElementById('tachesList');

    if (tacheInput.value.trim() !== '') {
        
        // Créer un nouvel élément li pour la nouvelle tâche
        const newTask = document.createElement('li');
        const newTaskContent = document.createElement('p');

        // Ajouter le texte de la tâche à l'élément li
        newTaskContent.innerText = tacheInput.value;

        
        // Ajouter un bouton pour supprimer la tâche
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id','suppresionButton');

        deleteButton.innerText = 'Supprimer';
        deleteButton.onclick = function () {
            tachesList.removeChild(newTask);
        };

        // Ajouter un bouton pour marquer la tâche comme terminée
        const completeButton = document.createElement('button');
        completeButton.setAttribute('id','terminationButton');

        completeButton.innerText = 'Terminé';
        completeButton.onclick = function () {
            newTask.classList.toggle('completed');
            if (newTask.classList.contains('completed')) {
                moveToBottom(newTask);
            }
        };

        // Ajouter les boutons à l'élément li
        newTask.appendChild(newTaskContent);
        newTask.appendChild(deleteButton);
        newTask.appendChild(completeButton);

        // Ajouter l'élément li à la liste des tâches
        tachesList.insertBefore(newTask, tachesList.firstChild);


        // Effacer le champ de saisie
        tacheInput.value = '';
    }
}

function moveToBottom(task) {
   
    tachesList.appendChild(task);
}