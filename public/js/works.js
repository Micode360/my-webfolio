document.getElementById('webfolio-img-card').addEventListener('click', folioModalDisplayOn);
function folioModalDisplayOn(){
    if(window.innerWidth > 650) {
     document.querySelector('.cover').style.display = 'flex';
}
}

document.querySelector('.close').addEventListener('click', folioModalDisplayOff);
function folioModalDisplayOff(){
     document.querySelector('.cover').style.display = 'none';
}


document.getElementById('chat-bot').addEventListener('click', chatBotModal);

function chatBotModal(){
    if(window.innerWidth > 650) {
    document.querySelector('.modal-container').style.display = 'flex';
    }
}

document.querySelector('.closeII').addEventListener('click', folioModalDisplayOffII);
function folioModalDisplayOffII(){
     document.querySelector('.modal-container').style.display = 'none';
}








