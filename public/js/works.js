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

document.querySelector('.cover').addEventListener('click', coverOff);
function coverOff(){
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

document.querySelector('.modal-container').addEventListener('click', chatModalOff);
function chatModalOff(){
     document.querySelector('.modal-container').style.display = 'none';
}



document.getElementById('live-quote').addEventListener('click', liveQuoteMachine);

function liveQuoteMachine(){
    if(window.innerWidth > 650) {
    document.querySelector('#live-quote-container').style.display = 'flex';
    }
}

document.querySelector('.closeIII').addEventListener('click', liveQuoteOff);
function liveQuoteOff(){
     document.querySelector('#live-quote-container').style.display = 'none';
}

document.querySelector('#live-quote-container').addEventListener('click', quoteModalOff);
function quoteModalOff(){
     document.querySelector('#live-quote-container').style.display = 'none';
}









