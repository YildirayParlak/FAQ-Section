let toggles = document.getElementsByClassName("toggle");

let content = document.getElementsByClassName("content");

let icons = document.getElementsByClassName("icon");

for(let i = 0; i<toggles.length; i++){
    toggles[i].addEventListener("click",() =>{
        if(parseInt(content[i].style.height) != content[i].scrollHeight){
            content[i].style.height = content[i].scrollHeight + "px";
            toggles[i].style.color = "#a046eb";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }else{
            content[i].style.height = "0px";
            toggles[i].style.color ="#fff";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j =0; j<content.length; j++){
            if(j !==i){
                content[j].style.height ="0px";
                toggles[j].style.color = "#fff";
                icons[j].classList.remove("fa-minus");
                icons[j].classList.add("fa-plus");
            }
        }

    });
}