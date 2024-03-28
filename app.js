const selectmenu = document.querySelectorAll('select');
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