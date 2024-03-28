const selectmenu = document.querySelectorAll('select');
const timebox = document.querySelector('.time');
const setalarmBTN = document.querySelector('button')
const ringaudio = new Audio('assets/ringtone.mp3')
const content = document.querySelector('.content');


let alarmtime ,alarmstate = 'noset' ;
console.log(selectmenu);
for(let i=23;i>=0;i--){
    if(i < 10){
        i ='0' + i;
    }
    else{
        i = i
    }
    let option =`<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML('afterend' , option);
    console.log(option);
}
for(let i=59;i>=0;i--){
    if(i < 10){
        i ='0' + i;
    }
    else{
        i = i
    }
    let option =`<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML('afterend' , option);
    console.log(option);
}


setInterval(() => {
    let date = new Date();
    let h =date.getHours()
    let m =date.getMinutes()
    let s =date.getSeconds()

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    timebox.innerHTML = `${h}:${m}:${s}`;
    if(alarmtime == `${h}:${m}`){
        ringaudio.play();
        ringaudio.loop=true;
    }
}, 1000);


setalarmBTN.addEventListener('click' , ()=>{
    alarmtime = `${selectmenu[0].value}:${selectmenu[1].value}`
    console.log(alarmtime)
    if(alarmtime.includes('Hour') || alarmtime.includes('Minute')){
          return alert('لطفا زمان درستی انخاب کنید');
    }
    content.classList.add('disable');
    setalarmBTN.innerHTML='clear alarm'

    checkstate(alarmstate);
})

function checkstate (state){
    if(state == 'noset'){
        content.classList.add('disable');
        setalarmBTN.innerHTML='clear alarm'
        alarmstate='set';
    }
    else{
        content.classList.remove('disable');
        setalarmBTN.innerHTML='set alarm'
        alarmtime= '';
        alarmstate='noset';
        ringaudio.pause();
    }
}