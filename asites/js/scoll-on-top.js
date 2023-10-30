    let scrToR = document.getElementById("scrToR");
    console.log(scrToR);
    scrToR.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
    
    window.onscroll = function () {
        if(window.scrollY >= 230) {
            scrToR.style.opacity = "1"
        } else {
            scrToR.style.opacity = "0"
        }
    };