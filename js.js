window.document.getElementById('lista0').style.display="none"
window.document.getElementById('lista1').style.display="none"
window.document.getElementById('lista11').style.display="none"

function lista0animacao() {
 
    console.log('lista 0')
    if (window.document.getElementById('lista0').style.display=="none") 
    {
        console.log('abriu!')
        /*window.document.getElementById('contlist').style.width="unset"*/
        window.document.getElementById('lista0').style.display="flex"
        console.log('abriu!')
        window.document.getElementById('l1').style.transform="rotate(45deg) translateY(10px) "
        window.document.getElementById('l3').style.transform="rotate(-45deg) translateY(-10px)"
        window.document.getElementById('l2').style.opacity="0%"
    }
    else{
        console.log('fechou!')
        /*window.document.getElementById('contlist').style.width="0"*/
        window.document.getElementById('lista0').style.display="none"
        window.document.getElementById('l1').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l3').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l2').style.opacity="100%"

    }
    
}
function lista1() {
    if (window.document.getElementById('lista1').style.display=="none") {
        console.log('lista1 abriu')
        window.document.getElementById('lista1').style.display="flex"
        window.document.getElementById('lista11').style.display="none"
        
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista11').style.display="none"
        
        
    }
 
}
function lista11() {
    if (window.document.getElementById('lista11').style.display=="none") {
        console.log('referencias e ajuda')
        window.document.getElementById('lista11').style.display="contents"
       
        
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista11').style.display="none"
      
        
        
    }
 
}




/*teste para saber se a página é uma pagina de artigos*/
if (!!document.querySelector('article.artigos')){

/*criação dos nomes de todos os primeiros itens*/
    
var item1=window.document.getElementById('i1').innerText
var item11=window.document.getElementById('i11').innerText
var item111=window.document.getElementById('i111').innerText
var item112=window.document.getElementById('i112').innerText
var numerodoartigo = window.document.querySelector('body').className






switch (numerodoartigo) {
    case 'i111':
    window.document.getElementById('pg1').innerHTML=item1
    window.document.getElementById('pg2').innerHTML=item11
    window.document.getElementById('pg3').innerHTML=item111
    var numerodoartigo2=1
    break;
    
    case 'i112':
    window.document.querySelector('h1.titulo').innerHTML=item3_2+whatsaap
    window.document.getElementById('pg1').innerHTML=item1
    window.document.getElementById('pg2').innerHTML=item1
    window.document.getElementById('pg3').innerHTML=item1
    break;

    default:
    break;
}

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
        titulos.t1.parentNode.removeChild( titulos.t2);
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

    document.querySelector('#ajuda a').innerHTML="Ajuda e dicas"

    let artigo1=document.querySelector('#lista11 li:nth-of-type(1) a').innerHTML
    let artigo2=document.querySelector('#lista11 li:nth-of-type(2) a').innerHTML
    let artigo3=document.querySelector('#lista11 li:nth-of-type(3) a').innerHTML
    let artigo4=document.querySelector('#lista11 li:nth-of-type(4) a').innerHTML
    let artigo5=document.querySelector('#lista11 li:nth-of-type(5) a').innerHTML
    let artigo6=document.querySelector('#lista11 li:nth-of-type(6) a').innerHTML
    let artigo7=document.querySelector('#lista11 li:nth-of-type(7) a').innerHTML
    let artigo8=document.querySelector('#lista11 li:nth-of-type(8) a').innerHTML
    let artigo9=document.querySelector('#lista11 li:nth-of-type(9) a').innerHTML

    let link1=document.querySelector('#lista11 li:nth-of-type(1) a').href
    let link2=document.querySelector('#lista11 li:nth-of-type(2) a').href
    let link3=document.querySelector('#lista11 li:nth-of-type(3) a').href
    let link4=document.querySelector('#lista11 li:nth-of-type(4) a').href
    let link5=document.querySelector('#lista11 li:nth-of-type(5) a').href
    let link6=document.querySelector('#lista11 li:nth-of-type(6) a').href
    let link7=document.querySelector('#lista11 li:nth-of-type(7) a').href
    let link8=document.querySelector('#lista11 li:nth-of-type(8) a').href
    let link9=document.querySelector('#lista11 li:nth-of-type(9) a').href

    var whatsaap= {
        nome:[artigo1,artigo2,artigo3,artigo4,artigo5,artigo6,artigo7,artigo8,artigo9],
        link:[link1,link2,link3,link4,link6,link7,link8,link9]
    }
    
    for (let index = 0; index <= whatsaap.nome.length; index++) {
        var numerodecelulas=index;
    }
  
    switch (numerodoartigo2) {
        case 1:
    document.querySelector(`div#artigos-c a:nth-of-type(1) h1`).innerHTML=whatsaap.nome[numerodoartigo2+1]
    document.querySelector(`div#artigos-c a:nth-of-type(1) h1`).href=whatsaap.link[numerodoartigo2+1]
    
    document.querySelector(`div#artigos-c a:nth-of-type(2) h1`).innerHTML=whatsaap.nome[numerodoartigo2+2]
    document.querySelector(`div#artigos-c a:nth-of-type(2) h1`).href=whatsaap.link[numerodoartigo2+2]

    document.querySelector(`div#artigos-c a:nth-of-type(3) h1`).innerHTML=whatsaap.nome[numerodoartigo2+3]
    document.querySelector(`div#artigos-c a:nth-of-type(3) h1`).href=whatsaap.link[numerodoartigo2+3]

    document.querySelector(`div#artigos-c a:nth-of-type(4) h1`).innerHTML=whatsaap.nome[numerodoartigo2+4]
    document.querySelector(`div#artigos-c a:nth-of-type(4) h1`).href=whatsaap.link[numerodoartigo2+4]
            break;
    
        default:
            break;
    }
  

    




/*contadores*/
window.document.getElementById('lista0').style.display="none"
       window.document.getElementById('lista1').style.display="none"
window.document.getElementById('lista2-1').style.display="none"



   window.document.getElementById('lista0').style.display="none"

function lista0animacao() {
 
    console.log('lista 0')
    if (window.document.getElementById('lista0').style.display=="none") 
    {
        console.log('abriu!')
        /*window.document.getElementById('contlist').style.width="unset"*/
        window.document.getElementById('lista0').style.display="flex"
        console.log('abriu!')
        window.document.getElementById('l1').style.transform="rotate(45deg) translateY(10px) "
        window.document.getElementById('l3').style.transform="rotate(-45deg) translateY(-10px)"
        window.document.getElementById('l2').style.opacity="0%"
    }
    else{
        console.log('fechou!')
        /*window.document.getElementById('contlist').style.width="0"*/
        window.document.getElementById('lista0').style.display="none"
        window.document.getElementById('l1').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l3').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l2').style.opacity="100%"

    }
    
}
function lista1() {
    if (window.document.getElementById('lista1').style.display=="none") {
        console.log('lista1 abriu')
        window.document.getElementById('lista1').style.display="flex"
        window.document.getElementById('lista1-2').style.display="flex"
        
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista1-2').style.display="none"
        
        
    }
 
}
function lista12() {
    if (window.document.getElementById('lista2-2').style.display=="none") {
        console.log('referencias e ajuda')
        window.document.getElementById('lista2-2').style.display="flex"
       
        
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista2-2').style.display="none"
      
        
        
    }
 
}

function lista21() {
    if (window.document.getElementById('lista2-1').style.display=="none") {
        window.document.getElementById('lista2-1').style.display="flex"
        
    }
    else{
        window.document.getElementById('lista2-1').style.display="none"
     
    }
}


var c =0
function primeirospassos1(){
    
    if (c==0) {
         document.querySelector('div.fotos:nth-of-type(2)').style.display="flex"
         
         document.querySelector('div.botao:nth-of-type(1) > span').innerText="Ocultar imagens"
         
        
         c++
    }
    else{
        document.querySelector('div.fotos:nth-of-type(2)').style.display="none"
        document.querySelector('div.botao:nth-of-type(1)>span').innerText="Mostrar imagens"
        c--

    }
   
}}