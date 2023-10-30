    let scrToL = document.getElementById("scrToL")
    scrToL.onclick = function () {
    window.scrollTo( {
        top :0 ,
        behavior:'smooth' ,
    })
}
    window.onscroll = function () {
    if(window.scrollY >= 200) {
    scrToL.style.opacity = "1";
} else {
    scrToL.style.opacity = "0";
}
}
