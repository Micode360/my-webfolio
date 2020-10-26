    const burger = document.querySelector('.burger');
       const navbarMin = document.querySelector('.navbar-min');

       burger.addEventListener("click", () => {
           navbarMin.classList.toggle("navbar-visible");
       });

       const aboutlink = document.querySelector('#about');
       const aboutme = document.querySelector('#about-me-container');
       

       $('#navbar a, .navbar-min a, .nav-on-wall a').on('click', function(e){
             if(this.hash !== ''){
                 e.preventDefault();

                 const hash = this.hash;
                 $('html, body').animate({
                     scrollTop:$(hash).offset().top
                 },500)
             }
       });


       document.querySelector('.cover').addEventListener('click', closeCoverMachine);

       function closeCoverMachine(){
           document.querySelector('.cover').style.display = 'none';
       }


       document.getElementById('mod-board').addEventListener('click', statisticsMachine);

        function statisticsMachine(){
            if(window.innerWidth > 300) {
            document.querySelector('.cover').style.display = 'flex';
            }
        }

        document.querySelector('.close').addEventListener('click', closeStatisticsMachine);

        function closeStatisticsMachine(){
            if(window.innerWidth > 370) {
            document.querySelector('.cover').style.display = 'none';
            }
        }


        (function () {
          setTimeout(() => {
            document.querySelector('.info').style.display = 'block';
          }, 5000);
        })();

        document.querySelector('.git-close').addEventListener('click', closeGitModal);

        function closeGitModal(){
            document.querySelector('.info').style.display = 'none';
        }





       //nav on wall visibilitly
       window.addEventListener('load', function(){
        const onwall = document.querySelector('.nav-on-wall');
        onwall.style.display = 'none';
       });

       window.addEventListener('scroll', navOnwall);

       function navOnwall() {
            const onwall = document.querySelector('.nav-on-wall');
            const val  = 700;
            const scrollValue =  window.scrollY;

            if(window.innerWidth >= 500){
              if(scrollValue < val ) onwall.style.display = 'none';
              else onwall.style.display = 'flex';
            }else  onwall.style.display = 'none';

       } 


       


      const contactForm = document.querySelector('#contact-form'),        
            email = document.querySelector('#email'),
            name = document.querySelector('#name'),
            message = document.querySelector('#message'),
            sendMsg = document.querySelector('#sendmsg');

            sendMsg.addEventListener('click', processor);

             function processor(e) {
                e.preventDefault();
       if(checkEmailFunctionality() && checkNameFunctionality() && checkMessageFunctionality()){
          const status = response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            }
            return Promise.reject(new Error(response.statusText))
        }                              
               fetch('/path/message', {
                   method: 'POST',
                   headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                   },
                   body: JSON.stringify({
                        email: email.value,
                        name:  name.value,
                        message:  message.value
                   })
               }).then(status).then(res => {
                 const response = res.json();
                  return response;
               }).then(data => {
                console.dir(data.errors[0].msg);
               }).catch(err=>{
                 console.log(err);
               });

               const sent = document.querySelector('.header-sent')
               sent.style.display = 'block';
               sent.classList.add('sent-visible');
               pageReload();
              }
           
              }

              const pageReload = () => {
                setTimeout(() => {
                  location.reload();
                }, 3000);
              }

                document.querySelector('.x').addEventListener('click', hideX);
                function hideX(){
                  document.querySelector('.header-sent').style.display = 'none';
                }

                function checkNameFunctionality(){
                    if(inputTextisEmpty(name)) return;
                    if(!justLetters(name)) return;
                    return true;
                }

                function checkMessageFunctionality(){
                    if(inputTextisEmpty(message)) return;
                    return true;
                }

                function checkEmailFunctionality(){
                      if(inputTextisEmpty(email)) return;
                      if(!emailExactPattern(email)) return;
                      return true;
                }

                function inputTextisEmpty(element){
                     if(empty(element.value.trim())){
                        inValid(element, `Please fill your ${element.id}`);
                        return true;
                     }
                     else{
                       valid(element);
                       return false;
                     };
                }

                function justLetters(element) {
                    var regex = /^[a-zA-Z ]+$/;
                    if(regex.test(element.value)){
                      valid(element) 
                      return true;
                    }
                    else inValid(element,`${element.id} must have only letters.`);
                }

                function emailExactPattern(element){
                 const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if(regex.test(element.value)){
                    valid(element);
                    return true;
                  }
                  else inValid(element,`Must be a regular ${element.id}`);
            }

                function empty(value) {
                    if (value === '') return true;
                    return false;
                  }

                  function inValid(element, message) {
                    element.className = 'invalid';
                    element.nextElementSibling.innerHTML = message;
                    element.nextElementSibling.style.color = 'rgb(206, 206, 53)';
                  }

                  function valid(element) {
                    element.className = 'valid';
                    element.nextElementSibling.innerHTML = '';
                  }




