
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    navbar.classList.remove('active');
}
      let op1=document.querySelector("#opt1");
      let op2=document.querySelector("#opt2");
      let op3=document.querySelector("#opt3");
      let op4=document.querySelector("#opt4");
      let op5=document.querySelector("#opt5");
      let op6=document.querySelector("#opt6");
      let op7=document.querySelector("#opt7");
      let op8=document.querySelector("#opt8");
      let st1=document.querySelector("#step1");
      let st2=document.querySelector("#step2");
      let st3=document.querySelector("#step3");
      let st4=document.querySelector("#step4");
      let st5=document.querySelector("#step5");
      let st6=document.querySelector("#step6");
      let st7=document.querySelector("#step7");
      let st8=document.querySelector("#step8");
      const imgB = () => {
        document.getElementById("step1").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgH = () => {
        document.getElementById("step2").style.display="inline";
        document.getElementById("step1").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgS = () => {
        document.getElementById("step3").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgSm = () => {
        document.getElementById("step4").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgO = () => {
        document.getElementById("step5").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgG = () => {
        document.getElementById("step6").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step7").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgP = () => {
        document.getElementById("step7").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step8").style.display="none";
      }
      const imgHw = () => {
        document.getElementById("step8").style.display="inline";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step7").style.display="none";
      }

      const productContainers = [...document.querySelectorAll('.product-container')];
      const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
      const preBtn = [...document.querySelectorAll('.pre-btn')];
      
      productContainers.forEach((item, i) => {
          let containerDimensions = item.getBoundingClientRect();
          let containerWidth = containerDimensions.width;
      
          nxtBtn[i].addEventListener('click', () => {
              item.scrollLeft += containerWidth;
          })
      
          preBtn[i].addEventListener('click', () => {
              item.scrollLeft -= containerWidth;
          })
      })

      function show() {
        document.getElementById("galleries").style.overflow = "visible" ;
        document.getElementById("galleries").style.maxHeight = "fit-content" ;
        document.getElementById("plusbtn").style.display = "none";
        document.getElementById("minusbtn").style.display = "inline";
      
      }
      function hide(){
        document.getElementById("galleries").style.maxHeight = "30vh" ;
        document.getElementById("galleries").style.overflow = "hidden" ;
        document.getElementById("plusbtn").style.display = "inline";
        document.getElementById("minusbtn").style.display = "none";
      }
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]') 
    const overlay = document.getElementById('overlay')
openModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  } )
})

overlay.addEventListener('click' , () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  } )
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal1')
    closeModal(modal)
  } )
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal2')
    closeModal(modal)
  } )
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal3')
    closeModal(modal)
  } )
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal4')
    closeModal(modal)
  } )
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal5')
    closeModal(modal)
  } )
})
closeModalButtons.forEach(button => {
  button.addEventListener('click' , () => {
    const modal = button.closest('.modal6')
    closeModal(modal)
  } )
})

var i = 0 ;
var j = 2;
let text = [];
let blogby = [];
let images = [];
var time = 9920;

let arrownxt = document.querySelector(".next-arrow");
let arrowbck = document.querySelector(".back-arrow");


images[0] = 'g2.jpg';
images[1] = 'g3.jpg';
images[2] = 'g1.jpg';

text[0] = "Will Be Shared Soon1";
text[1] = "Will Be Shared Soon2";
text[2] = "Will Be Shared Soon3";

blogby[0] = "Name1 <br>Region - Country";
blogby[1] = "Name2 <br>Region - Country";
blogby[2] = "Name3 <br>Region - Country";
function changeImg(){
  document.slide.src = images[i];
  document.getElementById("blog-para").innerHTML = text[i];
  document.getElementById("blog-by").innerHTML = blogby[i];
 

  if(i < images.length - 1){
    i++;
  }
  else
  {
    i = 0;
  }

  setTimeout("changeImg()" , time);
}

function next(){
  document.slide.src = images[i];
  document.getElementById("blog-para").innerHTML = text[i];
  document.getElementById("blog-by").innerHTML = blogby[i];
 

  if(i < images.length - 1){
    i++;
  }
  else
  {
    i = 0;
  }

}

function back(){
  document.slide.src = images[j];
  document.getElementById("blog-para").innerHTML = text[j];
  document.getElementById("blog-by").innerHTML = blogby[j];
 

  if(j > 0){
    j--;
  }
  else
  {
    j = 2;
  }

}


window.onload = changeImg;
arrownxt.onclick = next;
arrowbck.onclick = back;




const liItem = document.querySelectorAll(".years li");
const cards = document.querySelectorAll(".product-card");
const spanItem = document.querySelectorAll(".years li span");




liItem.forEach(li => {
    li.onclick = function(){
        const value = li.textContent;
        cards.forEach(cards => {
             cards.style.display = "none";
            if(cards.getAttribute('data-filter') == value.toString() || value == "All"){
                cards.style.display = "inline";
            }
        }) 
    }    


}) ;

spanItem.forEach(span => {
    span.onclick = function (){
        spanItem.forEach(span => {
            span.className = "";
        })
        span.className = "showAll";
    }
})

//manual
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    })
  });
  
  
  
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');


}
btns.forEach((btn, i) => {
  btn.addEventListener("click" ,() =>{
    manualNav(i);
    currentSlide = i;
  });
});
//autoplay
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i =1;
  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      })
      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;
      if(slides.length == i){
        i=0;
      }
      if(i>=slides.length){
          return;
      }
      repeater();
    }, 10000);
  }
      repeater();
    }
    repeat();
  

