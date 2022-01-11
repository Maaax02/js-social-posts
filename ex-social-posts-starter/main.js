// creazione array di oggetti 
let post = [
    {
        id: 2,
        nome: 'Massimo Lunetta',
        proPic: '../img/me.jpg',
        data: '02/19/2021',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptate, nihil nostrum distinctio voluptatum, laudantium dicta nulla ab mollitia in perspiciatis rem placeat eum molestias sapiente quam doloribus rerum.',
        image: '../img/MonkaSSS.jpg',
        likes: 20
    },

    {
        id: 3,
        nome: 'Elon Musk',
        proPic: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        data: '06/19/2021',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptate, nihil nostrum distinctio voluptatum, laudantium dicta nulla ab mollitia in perspiciatis rem placeat eum molestias sapiente quam doloribus rerum.',
        image: 'https://cdn.motor1.com/images/mgl/L94k3/s3/tesla-roadster-at-the-petersen-automotive-museum-photo-petersen-automotive-museum-fb.jpg',
        likes: 45
    },

    {
        id: 4,
        nome: 'Paul Walker',
        image: 'https://www.tuningblog.eu/wp-content/uploads/2020/07/Fast-Furious-Paul-Walker-Toyota-Supra-MK4-Replika-Header.jpg',
        data: '05/22/2021',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptate, nihil nostrum distinctio voluptatum, laudantium dicta nulla ab mollitia in perspiciatis rem placeat eum molestias sapiente quam doloribus rerum.',
        proPic: 'https://i2-prod.mirror.co.uk/incoming/article2871365.ece/ALTERNATES/s615/Paul-Walker-Dead.jpg',
        likes: 2000
    },

]

let container = document.querySelector('.posts-list');
let liked = [];

for (x = 0; x < post.length; x++){
    const cycle = post[x];
    container.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${cycle.proPic}>                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${cycle.nome}</div>
                <div class="post-meta__time">${cycle.data}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${cycle.text}</div>
    <div class="post__image">
        <img src="${cycle.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter"><span class="here">${cycle.likes}</span></b> persone
            </div>
        </div> 
    </div>            
</div>`;
}


let button = document.querySelector('.js-like-button');
let likesNumber = document.querySelector('.here');

button.addEventListener('click', function(){

    button.classList.toggle('like-button--liked');
    likesNumber.innerText++; 
})





