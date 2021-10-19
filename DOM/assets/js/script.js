const setDarkMode = element => element.classList.add('dark-mode');
const removeDarkMode = element => element.classList.remove('dark-mode');
const getBody = () => document.querySelector('body');
const getFooter = () => document.querySelector('.footer');
const getButton = () => document.querySelector('.action-btn');
const getTitle = () => document.querySelector('.title-mode');
const setWords = element => {
    element.innerHTML = element.classList.contains('dark-mode') ? 
    element.innerHTML ="Dark Mode ON" :
    element.innerHTML = "Light Mode ON" 
}

function togleMode(){
    if(getBody().classList.contains('dark-mode')){
        removeDarkMode(getBody());
        removeDarkMode(getFooter());
        removeDarkMode(getTitle());
        removeDarkMode(getButton());
        setWords(getTitle());
    }else {
        setDarkMode(getBody());
        setDarkMode(getFooter());
        setDarkMode(getTitle());
        setDarkMode(getButton());
        setWords(getTitle());
    }
}

getButton().addEventListener('click', togleMode);