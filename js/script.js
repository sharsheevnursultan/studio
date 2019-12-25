
'use strict';

function Tabs() {
    let bindAll = function () {
        let menuElements = document.querySelectorAll('[data-tab]');
        for (let i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    let clear = function () {
        let menuElements = document.querySelectorAll('[data-tab]');
        for (let i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function (e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    };

    bindAll();
}

let connectTabs = new Tabs();


function addMenuActive() {
    let event = document.getElementById('menu-btn');
    event.classList.toggle('active');
    console.log('worked')
}

// spoiler script

$(document).ready(function(){
    $('.btn-spoiler').click(function(){ // при клике по заголовку спойлера
        var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт
        if(show == 1){ // если отображен, то прячем
            $(this).attr('show', 0);
            $(this).next('.spoiler-text').slideUp(300);
        }else{ // если спрятан, то показываем
            $(this).attr('show', 1);
            $(this).next('.spoiler-text').slideDown(300);
        }
    });
});

$(document).ready(function(){
    $('.btn-spoiler-left-menu').click(function(){ // при клике по заголовку спойлера
        var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт
        if(show == 1){ // если отображен, то прячем
            $(this).attr('show', 0);
            $(this).next('.spoiler-text').slideUp(300);
        }else{ // если спрятан, то показываем
            $(this).attr('show', 1);
            $(this).next('.spoiler-text').slideDown(300);
        }
    });
});

// input type number

function catalogItemCounter(field){

    var fieldCount = function(el) {

        var
            // Мин. значение
            min = el.data('min') || false,

            // Макс. значение
            max = el.data('max') || false,

            // Кнопка уменьшения кол-ва
            dec = el.prev('.dec'),

            // Кнопка увеличения кол-ва
            inc = el.next('.inc');

        function init(el) {
            if(!el.attr('disabled')){
                dec.on('click', decrement);
                inc.on('click', increment);
            }

            // Уменьшим значение
            function decrement() {
                var value = parseInt(el[0].value);
                value--;

                if(!min || value >= min) {
                    el[0].value = value;
                }
            }

            // Увеличим значение
            function increment() {
                var value = parseInt(el[0].value);

                value++;

                if(!max || value <= max) {
                    el[0].value = value++;
                }
            }

        }

        el.each(function() {
            init($(this));
        });
    };

    $(field).each(function(){
        fieldCount($(this));
    });
}

catalogItemCounter('.fieldCount');

// Галерея изображений на странице каталог

thumbs.onclick = function(event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
};

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}


