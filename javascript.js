
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

function limpaForm() {
    document.getElementById("formulinho").reset();
}

function aciona1() {
    $("#posicaoPlayer").text("Posição 1");
    $("#nomePlayer").text("Amanda Nunes");
    $("#descPlayer").text("19 anos, joga volei profissional há 16 anos.");
    $("#imgPlayer").attr("src", "image/players/1.png");
}

function aciona2() {
    $("#posicaoPlayer").text("Posição 2");
    $("#nomePlayer").text("Maria Tereza Silva");
    $("#descPlayer").text("22 anos, pratica o esporte desde seus 10 anos.");
    $("#imgPlayer").attr("src", "image/players/2.png");
}
function aciona3() {
    $("#posicaoPlayer").text("Posição 3");
    $("#nomePlayer").text("Carla Mascarenhas");
    $("#descPlayer").text("20 anos, já ganhou 5 campeonatos estaduais, somente neste ano.");
    $("#imgPlayer").attr("src", "image/players/3.png");
}

function aciona4() {
    $("#posicaoPlayer").text("Posição 4");
    $("#nomePlayer").text("Eduarda Gentil");
    $("#descPlayer").text("19 anos, apaixonada pelo esporte, pratica há mais de 10 anos.");
    $("#imgPlayer").attr("src", "image/players/4.png");
}

function aciona5() {
    $("#posicaoPlayer").text("Posição 5");
    $("#nomePlayer").text("Fabiana Souza");
    $("#descPlayer").text("21 anos, joga volei há 5 anos, neste período já ganhou mais de 2 campeonatos.");
    $("#imgPlayer").attr("src", "image/players/5.png");
}

function aciona6(){
    $("#posicaoPlayer").text("Posição 6");
    $("#nomePlayer").text("Gisele Lee");
    $("#descPlayer").text("18 anos, a mais jovem do time, não perde um treino sequer.");
    $("#imgPlayer").attr("src", "image/players/6.png");
}

function retornaStock(){
    $("#posicaoPlayer").text("Selecione uma posição");
    $("#nomePlayer").text("Nome do jogador");
    $("#descPlayer").text("Sobre o jogador");
    $("#imgPlayer").attr("src", "image/user.png");
}

function tamanho(){
    var tam = $(window).width();
    if(tam < 700){
        $('#grande').hide();
        $('#pequena').show();

    }else{
        $('#grande').show();
        $('#pequena').hide();
    }
}

function enviaForm() {
    document.getElementById("formulinho").reset();
    $("#divEnviado h3").text("Seus dados foram enviados com sucesso! Aguarde nosso contato.");
}
