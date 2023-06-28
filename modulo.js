//o que esta errado com esse codigo
const controls=
document.querySelectorAll(".control");
let currentItem = 0;
document.querySelectorAll(".items");
const maxItem = items.length;
controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft =
        control.classList.contains("arrow-left");
        if (isLeft){
            currentItem -=1;
        }else{
            currentItem +=1;
        }
        console.log('control', isLeft, currentItem);
        if(currentItem>= maxItem){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItem -1; 
        }
        items.forEach(item => 
        item.classList.remove('current-item'));
        item[currentItem].scrollIntoView({
            inline:"center",
            behavior: "smooth",
        })

    })
});
