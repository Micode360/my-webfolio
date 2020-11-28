//Function to open modal
function modalOnProgram(attribute,detectAttribute,widthValue, display){
     document.querySelector(attribute).addEventListener('click', modalOn);

    function modalOn(){
        if(window.innerWidth > widthValue)
        document.querySelector(detectAttribute).style.display = display;
 }
}


 //Function to close modal
function modalOffProgram(attribute,detectAttribute,display){
     document.querySelector(attribute).addEventListener('click', modalOff);

    function modalOff(){
          document.querySelector(detectAttribute).style.display = display;
 }
}


 //Function to close cover modal
 function modalOffCoverProgram(attribute,detectAttribute,display){
     document.querySelector(attribute).addEventListener('click', modalCoverOff);

    function modalCoverOff() {
          document.querySelector(detectAttribute).style.display = display;
 }
}



//Webfolio
modalOnProgram('#webfolio-img-card','.cover',650,'flex');//To onemodal
modalOffProgram('.close','.cover','none');//To close Modal through x button
modalOffCoverProgram('.cover','.cover','none');//To close modal through cover Modal



//Chatbot
modalOnProgram('#chat-bot','.modal-container',650,'flex');//To on modal
modalOffProgram('.closeII','.modal-container','none');//To close Modal through x button
modalOffCoverProgram('.modal-container','.modal-container','none');//To close modal through cover Modal

//LiveQuoteMachine
modalOnProgram('#live-quote','#live-quote-container',650,'flex');//To on modal
modalOffProgram('.closeIII','.#live-quote-container','none');//To close Modal through x button
modalOffCoverProgram('#live-quote-container','#live-quote-container','none');//To close modal through cover Modal


//Mr Produxer
modalOnProgram('#mr-produxer','#mr-produxer-container',650,'flex');//To on modal
modalOffProgram('.closeIV','.#mr-produxer-container','none');//To close Modal through x button
modalOffCoverProgram('#mr-produxer-container','#mr-produxer-container','none');//To close modal through cover Modal














