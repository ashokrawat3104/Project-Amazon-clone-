const imgs = document.querySelectorAll('.hero-section ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('active');
    }
    imgs[n].classList.add('active');
}
changeSlide();

prev_btn.addEventListener('click', (e) =>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) =>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.pdt-img');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        if(evt.deltaY > 0){
            item.scrollTop += 20; // adjust the scroll step as needed
        }else{
            item.scrollTop -= 20; // adjust the scroll step as needed
        }
    })
}