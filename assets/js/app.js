
// Implementing the Accordion funtionality

const accordion = document.getElementsByClassName('contentBX');
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}