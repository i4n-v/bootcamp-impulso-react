const catAPI = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.querySelector('.cat-btn');

const getCats = async () => {
    const cat = await fetch(catAPI)
    .then(res => res.json())
    .catch( err => console.log(err));

    return cat.webpurl;
};

const loadCats = async () => {
    const catImg = document.querySelector('#cat-img');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadCats);
loadCats();