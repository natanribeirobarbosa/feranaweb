/*indice-----------------------*/
var item1=window.document.getElementById('i1').innerText
var item11=window.document.getElementById('i11').innerText
var item111=window.document.getElementById('w1').innerText
var item112=window.document.getElementById('w2').innerText
var numerodoartigo = window.document.querySelector('body').className






switch (numerodoartigo) {
    case 'i111':
    window.document.getElementById('pg1').innerHTML=item1
    window.document.getElementById('pg2').innerHTML=item11
    window.document.getElementById('pg3').innerHTML=item111
    var numerodoartigo2=1
    break;
    
    case 'i112':
    window.document.querySelector('h1.titulo').innerHTML=item112
    window.document.getElementById('pg1').innerHTML=item1
    window.document.getElementById('pg2').innerHTML=item11
    window.document.getElementById('pg3').innerHTML=item112
    break;

    default:
    break;
}

/*SUMARIO*//*----------------------------------------------------------------------------*/
var titulos= new Object();
    titulos.todos=window.document.querySelector('#indice ul')
    titulos.t1=window.document.querySelector('#indice ul li:nth-of-type(1)')
    titulos.t2=window.document.querySelector('#indice ul li:nth-of-type(2)')
    titulos.t3=window.document.querySelector('#indice ul li:nth-of-type(3)')
    titulos.t4=window.document.querySelector('#indice ul li:nth-of-type(4)')
    titulos.t5=window.document.querySelector('#indice ul li:nth-of-type(5)')
    titulos.t6=window.document.querySelector('#indice ul li:nth-of-type(6)')
    titulos.t7=window.document.querySelector('#indice ul li:nth-of-type(7)')

    if (!!document.querySelector('h2:nth-of-type(1)')) {
        window.document.querySelector('#indice ul li:nth-of-type(1) a').innerHTML=document.querySelector('h2:nth-of-type(1)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild(titulos.todos);
    }

    if (!!document.querySelector('h2:nth-of-type(2)')) {
        window.document.querySelector('#indice ul li:nth-of-type(2) a').innerHTML=document.querySelector('h2:nth-of-type(2)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild(titulos.t2);
    }

    if (!!document.querySelector('h2:nth-of-type(3)')) {
        window.document.querySelector('#indice ul li:nth-of-type(3) a').innerHTML=document.querySelector('h2:nth-of-type(3)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild( titulos.t3);
    }

    if (!!document.querySelector('h2:nth-of-type(4)')) {
        window.document.querySelector('#indice ul li:nth-of-type(4) a').innerHTML=document.querySelector('h2:nth-of-type(4)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild( titulos.t4);
    }

    if (!!document.querySelector('h2:nth-of-type(5)')) {
        window.document.querySelector('#indice ul li:nth-of-type(5) a').innerHTML=document.querySelector('h2:nth-of-type(5)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild( titulos.t5);
    }

    if (!!document.querySelector('h2:nth-of-type(6)')) {
        window.document.querySelector('#indice ul li:nth-of-type(6) a').innerHTML=document.querySelector('h2:nth-of-type(6)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild( titulos.t6);
    }

    if (!!document.querySelector('h2:nth-of-type(7)')) {
        window.document.querySelector('#indice ul li:nth-of-type(7) a').innerHTML=document.querySelector('h2:nth-of-type(7)').innerHTML
    }else{
        titulos.t1.parentNode.removeChild( titulos.t7);
    }

var c=1

/*TUTORIAIS RECOMENDADOS*/
tutoriaisrelacionadoswhatsaap(9)
function tutoriaisrelacionadoswhatsaap(n) {

let artigo1=document.querySelector('#lista11 li:nth-of-type(1) a').innerHTML
let artigo2=document.querySelector('#lista11 li:nth-of-type(2) a').innerHTML
let artigo3=document.querySelector('#lista11 li:nth-of-type(3) a').innerHTML
let artigo4=document.querySelector('#lista11 li:nth-of-type(4) a').innerHTML
let artigo5=document.querySelector('#lista11 li:nth-of-type(5) a').innerHTML
let artigo6=document.querySelector('#lista11 li:nth-of-type(6) a').innerHTML
let artigo7=document.querySelector('#lista11 li:nth-of-type(7) a').innerHTML
let artigo8=document.querySelector('#lista11 li:nth-of-type(8) a').innerHTML
let artigo9=document.querySelector('#lista11 li:nth-of-type(9) a').innerHTML
let artigo10=document.querySelector('#lista11 li:nth-of-type(10) a').innerHTML

let link1=document.querySelector('#lista11 li:nth-of-type(1) a').href
let link2=document.querySelector('#lista11 li:nth-of-type(2) a').href
let link3=document.querySelector('#lista11 li:nth-of-type(3) a').href
let link4=document.querySelector('#lista11 li:nth-of-type(4) a').href
let link5=document.querySelector('#lista11 li:nth-of-type(5) a').href
let link6=document.querySelector('#lista11 li:nth-of-type(6) a').href
let link7=document.querySelector('#lista11 li:nth-of-type(7) a').href
let link8=document.querySelector('#lista11 li:nth-of-type(8) a').href
let link9=document.querySelector('#lista11 li:nth-of-type(9) a').href

var whatsaap = {
    nome:[artigo1,artigo2,artigo3,artigo4,artigo5,artigo6,artigo7,artigo8,artigo9,artigo10,artigo1],
    link:[link1,link2,link3,link4,link6,link7,link8,link9]
}
var tamanho=whatsaap.nome.length
console.log(tamanho);
console.log(whatsaap.nome.length-4);


if ((n+4)>whatsaap.nome.length) {
    console.log(n);
    console.log(whatsaap.nome.length-2);
    let tamanho=whatsaap.nome.length
    switch (n) {
    case whatsaap.nome.length-4:
        document.getElementById(`titulo1`).innerText=whatsaap.nome[whatsaap.nome.length-4]
        document.getElementById(`titulo2`).innerText=whatsaap.nome[whatsaap.nome.length-3]
        document.getElementById(`titulo3`).innerText=whatsaap.nome[whatsaap.nome.length-2]
        document.getElementById(`titulo4`).innerText=whatsaap.nome[whatsaap.nome.length-1]
        break;
    

    case whatsaap.nome.length-3:
        document.getElementById(`titulo1`).innerText=whatsaap.nome[whatsaap.nome.length-5]
        document.getElementById(`titulo2`).innerText=whatsaap.nome[whatsaap.nome.length-3]
        document.getElementById(`titulo3`).innerText=whatsaap.nome[whatsaap.nome.length-2]
        document.getElementById(`titulo4`).innerText=whatsaap.nome[whatsaap.nome.length-1]
        break;

    case whatsaap.nome.length-2:
        document.getElementById(`titulo1`).innerText=whatsaap.nome[whatsaap.nome.length-5]
        document.getElementById(`titulo2`).innerText=whatsaap.nome[whatsaap.nome.length-4]
        document.getElementById(`titulo3`).innerText=whatsaap.nome[whatsaap.nome.length-2]
        document.getElementById(`titulo4`).innerText=whatsaap.nome[whatsaap.nome.length-1]
        break;  

    case whatsaap.nome.length-1:
        document.getElementById(`titulo1`).innerText=whatsaap.nome[whatsaap.nome.length-5]
        document.getElementById(`titulo2`).innerText=whatsaap.nome[whatsaap.nome.length-4]
        document.getElementById(`titulo3`).innerText=whatsaap.nome[whatsaap.nome.length-3]
        document.getElementById(`titulo4`).innerText=whatsaap.nome[whatsaap.nome.length-1]
        break;
        
        default:
            document.getElementById(`titulo1`).innerText=whatsaap.nome[whatsaap.nome.length-4]
            document.getElementById(`titulo2`).innerText=whatsaap.nome[whatsaap.nome.length-3]
            document.getElementById(`titulo3`).innerText=whatsaap.nome[whatsaap.nome.length-2]
            document.getElementById(`titulo4`).innerText=whatsaap.nome[whatsaap.nome.length-1]
            break;
    }
    

}
else{
    console.log(n);
    while (c<=4) {

document.getElementById(`titulo${c}`).innerText=whatsaap.nome[n]

n++
c++}}}