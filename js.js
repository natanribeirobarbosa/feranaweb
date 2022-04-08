var whatsaap= '<span class="_30yMe"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="rgb(12 12 12)" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="rgb(255,255,255)" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg></span>'

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
    window.document.querySelector('h1.titulo').innerHTML=item112
    window.document.getElementById('pg1').innerHTML=item1
    window.document.getElementById('pg2').innerHTML=item11
    window.document.getElementById('pg3').innerHTML=item112
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
window.document.getElementById('lista11').style.display="none"



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
         
         document.querySelector('div.botao:nth-of-type(1) > button').innerText="Ocultar imagens"
         
        
         c++
    }
    else{
        document.querySelector('div.fotos:nth-of-type(2)').style.display="none"
        document.querySelector('div.botao:nth-of-type(1)>button').innerText="Mostrar imagens"
        c--

    }
   
}}