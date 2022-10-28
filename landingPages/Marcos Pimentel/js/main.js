function mudouTamanho(){
    var nav = document.querySelector("#nav")
    if(window.innerWidth >= 768){
        nav.style.display = 'block'
    } else{
        nav.style.display = 'none'
    }
}

function clickMenu(){
    var nav = document.querySelector("#nav")
    nav.style.display = 'block'
}
function clickFechar(){
    var nav = document.querySelector("#nav")
    nav.style.display = 'none'
}

