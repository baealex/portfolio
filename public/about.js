
var textArray = [
    '개발을 좋아하는',
    '선의를 좋아하는',
    '파이썬을 좋아하는',
    '보라색을 좋아하는',
];
var nowIndex = getCookie('index') ? parseInt(getCookie('index')) : 0;
var endIndex = textArray.length - 1;

setInterval(function() { 
    textChange();
}, 4000);

function textChange() {
    $('#intro-text').text(textArray[nowIndex++]);
    if(nowIndex > endIndex) {
        nowIndex = 0;
    } document.cookie = 'index=' + nowIndex;
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}

function showTechETC() {
    $('#skill-etc').text(', Amazon Lightsail, NginX, SQLite, jQuery, Bootstrap, CloudFlare, Google Fonts, Google Analytics, GitHub, Daum Mail');
}

function unshowTechETC() {
    $('#skill-etc').text(' 외 10');
}

$(document).ready(function () {
    $('#intro-text').addClass('blink-text');
    textChange();
    
    $(window).scroll(function () {
        cp = $(document).scrollTop();
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});

function showPopup() {
    $('.popup').css('opacity', '1');
}

function hidePopup() {
    $('.popup').css('opacity', '0');
}