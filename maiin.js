const botoes=document.querySelectorAll(".botao");
const textos=document.querySelectorAll(".aba-conteudo");
for (let i = 0;i<botoes.length;i++){
    botoes[j].onclick=function(){
        for (letj=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }
}

const tempoObejetivo1 = new("2023-10-05T00:00:00")
const tempoObejetivo2 = new("2023-12-05T00:00:oo")
const tempoObejetivo3 = new("2023-12-30T00:00:00")
const tempoObejetivo4 = new("2024-02-01Too:00:00")

const tempos = [tempoObejetivo1, tempoObejetivo2, tempoObejetivo3, tempoObejetivo4];

function calculaTemopo(tempoObejetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObejetivo-tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
}