const usersLIist = document.querySelector('.Userslist');
const users = document.getElementById('nbuser');
const username = document.getElementById('pseudo');
const poucrentage = document.getElementById('pourcentage') //le textcontent de pourcentage doit etre entrée à la ligne 37 à la place de 50

for (i = 0; i < users.textContent; i++) {
    let userCard = document.createElement('div');
    userCard.className = 'usercard';
    userCard.id = i;
    usersLIist.appendChild(userCard);
    
        let figure = document.createElement('figure');
        userCard.appendChild(figure);

        let image = document.createElement('img');
        image.className ='userimage';
        image.src = './assets/image/avatar.png';
        figure.appendChild(image);

        let name = document.createElement('p');
        name.className ='name';
        name.textContent = pseudo.textContent;
        userCard.appendChild(name);

        let progression = document.createElement('p');
        progression.className ='progression';
        progression.textContent = "Progression:";
        userCard.appendChild(progression);

        let progress = document.createElement('div');
        progress.className ='progress';
        userCard.appendChild(progress);

        let progressionDone = document.createElement('div');
        progressionDone.className ='progress-done';
        progressionDone.setAttribute("data-done", "50");
        progressionDone.textContent = poucrentage.textContent +="%completed";
        progress.appendChild(progressionDone);
    
}

const userLIist = document.querySelector('.userslist');

const progress = document.querySelector('.progress-done');


setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
}, 500)