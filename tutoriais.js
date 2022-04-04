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

var whatsaap= {
    nome:[artigo1,artigo2,artigo3,artigo4,artigo5,artigo6,artigo7,artigo8,artigo9,artigo10,artigo1],
    link:[link1,link2,link3,link4,link6,link7,link8,link9]
}

var numerodetutoriaiswhatsaap=whatsaap.nome.length





deletetutoriaiswhatsaap(numerodetutoriaiswhatsaap)

function deletetutoriaiswhatsaap(t) {
   
    let contador=0

    while (contador<=(24-t)) {
       let tutorialatual =document.querySelector('div#artigos-c a:last-of-type')
        tutorialatual.parentNode.removeChild(tutorialatual);
        contador++
    } 
}

tutoriaiswhatsaap(whatsaap.nome.length)

function tutoriaiswhatsaap(t) {
    
    let contador=1
    console.log(t)
    
    while (contador<=t) {
       let elementoatual=document.querySelector(`#artigos-c a:nth-of-type(${contador}) div.conteudo h1`)
        elementoatual.id=`tutorial${contador}`
        document.getElementById(`tutorial${contador}`).innerHTML=whatsaap.nome[contador-1]
        contador++
        console.log(contador)
    }
    
    

    
    
   


    
}