

window.document.getElementById('lista0').style.display="flex"
window.document.getElementById('lista1').style.display="flex"
window.document.getElementById('lista11').style.display="flex"
/*LISTAS-----------------------------------------------------------------------------------*/
function lista0animacao() {
 
    console.log('lista 0')
    if (window.document.getElementById('lista0').style.display=="none") 
    {
        console.log('abriu!')
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
   
}