const nav = document.getElementById('ul3');
const all_cards = document.querySelectorAll('.card');


function showNav(nav_value) {
    nav.style.display = nav_value;
}

function selector(s_num) {
    const selectorall = document.querySelectorAll('.scrole_element');
    const cardall = document.querySelectorAll('.card');
    let length_cardall = cardall.length;
    let length_selectorall = selectorall.length;
    for (var i = 0; i < length_selectorall; i++) {
        selectorall[i].setAttribute('src', 'images/select false.svg');
    }
    for (var i = 0; i < length_cardall; i++) {
        cardall[i].style.display = 'none';
    }

    document.getElementById(s_num).setAttribute('src', 'images/select true.svg');
    const card_toselect = document.querySelectorAll('.card_' + s_num);
    let length_cardselected = card_toselect.length;
    for (var i = 0; i < length_cardselected; i++) {
        card_toselect[i].style.display = 'block';
    }
}

function select(event_name) {
    if (event_name == 'all') {
        // hiding all
        var length_card = all_cards.length;
        for (var i = 0; i < length_card; i++) {
            all_cards[i].style.display = 'none';
        }

        const card_s1 = document.querySelectorAll('.card_s1');
        var length_card_s1 = card_s1.length;
        for (var i = 0; i < length_card_s1; i++) {
            card_s1[i].style.display = 'block';
        }

        display_scrole(true);
    }
    else {
        // hiding all
        var length_card = all_cards.length;
        for (var i = 0; i < length_card; i++) {
            all_cards[i].style.display = 'none';
        }

        // block display the selected type
        const selected = document.querySelectorAll('.type_' + event_name);
        var length_selected = selected.length;
        for (var i = 0; i < length_selected; i++) {
            selected[i].style.display = 'block';
        }
        display_scrole(false);
    }
}


function display_scrole(value) {
    const selectorall = document.querySelectorAll('.scrole_element');
    let length_selectorall = selectorall.length;
    if (value == true) {
        for (var i = 0; i < length_selectorall; i++) {
            selectorall[i].style.display = 'block';
        }
    }
    else if (value == false) {
        for (var i = 0; i < length_selectorall; i++) {
            selectorall[i].style.display = 'none';
        }
    }
}