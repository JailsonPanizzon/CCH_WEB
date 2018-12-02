
    var corbotoes = "#C7B200";
    var corbotoes2 = "black";
    function trocacor(el) {
        el.style.backgroundColor = corbotoes2
    }
    function destrocacor(el) {
        el.style.backgroundColor = corbotoes
    }
    window.onscroll = fundo;

    function fundo() {
        if ($(window).scrollTop() > 0.1 && $(window).scrollTop() < 10) {
            document.getElementById("logo").style.width = "90%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.15)";
        }
        else if ($(window).scrollTop() > 10 && $(window).scrollTop() < 20) {
            document.getElementById("logo").style.width = "80%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.30)";
        }
        else if ($(window).scrollTop() > 20 && $(window).scrollTop() < 30) {
            document.getElementById("logo").style.width = "80%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.35)";

        }
        else if ($(window).scrollTop() > 30 && $(window).scrollTop() < 40) {
            document.getElementById("logo").style.width = "80%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.45)";
        }
        else if ($(window).scrollTop() > 40 && $(window).scrollTop() < 50) {
            document.getElementById("logo").style.width = "80%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.457)";
        }
        else if ($(window).scrollTop() > 50 && $(window).scrollTop() < 60) {
            document.getElementById("logo").style.width = "70%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
        else if ($(window).scrollTop() > 60 && $(window).scrollTop() < 70) {
            document.getElementById("logo").style.width = "60%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.55)";
        }
        else if ($(window).scrollTop() > 70 && $(window).scrollTop() < 80) {
            document.getElementById("logo").style.width = "50%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.65)";
        }
        else if ($(window).scrollTop() > 80 && $(window).scrollTop() < 90) {
            document.getElementById("logo").style.width = "40%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        }
        else if ($(window).scrollTop() > 90 && $(window).scrollTop() < 100) {
            document.getElementById("logo").style.width = "40%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        }
        else if ($(window).scrollTop() > 100 && $(window).scrollTop() < 110) {
            document.getElementById("logo").style.width = "40%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        }
        else if ($(window).scrollTop() > 125) {
            document.getElementById("logo").style.width = "40%";
            document.getElementById("superior").style.backgroundColor = "rgba(0, 0, 0, 1)";
        }
        else if ($(window).scrollTop() <= 0.1) {
            document.getElementById("logo").style.width = "110%";
            document.getElementById("superior").style.backgroundColor = "rgba(0,0,0,0.4)";
            document.getElementsByClassName("bt_titulo").style.width = "100%";
        }
    }
    var cont = 1;
    var intervalo = window.setInterval(troca_noticia, 3000);

    function troca_noticia(num = 0) {

        cont = cont - num;
        if (cont < 0) {
            cont = 2;
        }

        switch (cont) {
            case 1:
                $("#evento1").hide();
                $("#evento2").show();
                break;
            case 2:
                $("#evento2").hide();
                $("#evento1").show();
                break;
        }
        cont < 2 ? cont++ : cont = 1;
    }

    function hoverBotao(iden) {
        document.getElementById(iden).style.backgroundColor = "#303030";
    }
    function unHoverBotao(iden) {
        document.getElementById(iden).style.backgroundColor = "transparent";
    }

    function hoverquadros(iden) {
        document.getElementById(iden).style.backgroundImage = "150%";
    }
    function unHoverquadros(iden) {
        $(iden).next().width = "200%";
    }

    $('.carousel').carousel({
        interval: 2000
    })
