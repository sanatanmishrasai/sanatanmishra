const nav = document.getElementById('ul3');
function showNav(nav_value) {
    nav.style.display = nav_value;
}


function selector(s_num){
    const selectorall = document.querySelectorAll('.scrole_element');
    let length_selector = selectorall.length;
    for(var i = 0; i < length_selector; i++){
        selectorall[i].setAttribute('src', 'images/select false.svg');
    }
    document.getElementById(s_num).setAttribute('src', 'images/select true.svg');
}