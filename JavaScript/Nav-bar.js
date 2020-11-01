//Script to open ham-list when hamburg sign is clicked.
const hamBtn=document.querySelector('.ham-burg');
const hamList=document.querySelector('.ham-list');
let hamOpen=false;
let menuOpen=false;
hamBtn.addEventListener('click',()=>{
    if(!menuOpen)
    {
        hamBtn.classList.add('open');
        hamList.classList.add('open');
        menuOpen=true;
        hamOpen=true;
    }
    else
    {
        hamBtn.classList.remove('open');
        hamList.classList.remove('open');
        menuOpen=false;
        hamOpen=false;
    }
});
