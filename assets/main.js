function animaTxt(){
    
    const txtTitle = document.querySelector('.txt-title');
    const txtSml = document.querySelector('.sml');
    writterH1(txtTitle);
    writterH4(txtSml);

   function writterH1(txt){
        const txtArr = txt.innerHTML.split('');
        txt.innerHTML = '';
        
        txtArr.forEach((letter, i) => {      
            setTimeout(() => {
               txt.innerHTML += letter; 
           }, 150 * i);
        })
    }
    function writterH4(txt){
        const txtArr = txt.innerHTML.split('');
        txt.innerHTML = '';
        setTimeout(() =>{
            txtTitle.classList.remove('txt-title');
            txtSml.classList.add('txt-sml');
            txtArr.forEach((letter, i) => {      
                setTimeout(() => {
                   txt.innerHTML += letter; 
               }, 100 * i) 
            })
        }, 2000);
    }
    
}

function animaCards(){

    const target = document.querySelectorAll('[data-anima]');
    const animationClass = 'animate';
    const htmlbar = document.querySelector('.htmlbar');
    const cssbar = document.querySelector('.cssbar');
    const jsbar = document.querySelector('.jsbar');
    const bootstrapbar = document.querySelector('.bootstrapbar');
    const phpbar = document.querySelector('.phpbar');
    const laravelbar = document.querySelector('.laravelbar');
    const mysqlbar = document.querySelector('.mysqlbar');

    const windowTop = (window.pageYOffset + ((window.innerHeight * 3) / 4));
    target.forEach((e) =>{
        if((windowTop) > e.offsetTop){
            e.classList.add('animate');
            htmlbar.classList.add('htmlanimation');
            cssbar.classList.add('cssanimation');
            jsbar.classList.add('jsanimation');
            bootstrapbar.classList.add('bootstrapanimation');
            phpbar.classList.add('phpanimation');
            laravelbar.classList.add('laravelanimation');
            mysqlbar.classList.add('mysqlanimation');
        }else{
            e.classList.remove('animate');
        }
    })
}

function pageheight(){
    // console.log(window.pageYOffset);

    const target = document.querySelectorAll('[data-anima]');
    const htmlbar = document.querySelector('.htmlbar');
    const cssbar = document.querySelector('.cssbar');
    const jsbar = document.querySelector('.jsbar');
    const bootstrapbar = document.querySelector('.bootstrapbar');
    const phpbar = document.querySelector('.phpbar');
    const laravelbar = document.querySelector('.laravelbar');
    const mysqlbar = document.querySelector('.mysqlbar');

    target.forEach((e) =>{
        if(window.pageYOffset < 100){
            e.classList.remove('animate');
            
        }else if(window.pageYOffset < 400){
            e.classList.remove('animate');
            htmlbar.classList.remove('htmlanimation');
            cssbar.classList.remove('cssanimation');
            jsbar.classList.remove('jsanimation');
            bootstrapbar.classList.remove('bootstrapanimation');
            phpbar.classList.remove('phpanimation');
            laravelbar.classList.remove('laravelanimation');
            mysqlbar.classList.remove('mysqlanimation');
        }
    })
    
}

window.addEventListener('scroll', () =>{
    console.log(window.pageYOffset);
    animaCards();
    pageheight();
})

function txtShadow(){
    const element = document.querySelector(".shadow");
    const elemen = document.querySelector(".shadow1");

    const txtTitle = document.querySelector('.txt-title');
    const sml = document.querySelector('.sml');
    
    let shadow ='';
    for(let i=0;i<100;i++){
        shadow +=(shadow? ',':'')+ i*1+'px '+i*1+'px 0 #F2CB05';
    }
    element.style.textShadow = shadow;
    elemen.style.textShadow = shadow;
}

txtShadow();
animaTxt();

