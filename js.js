/*contadores*/
window.document.getElementById('lista0').style.transform="translateY(-150%)"




               

function lista0animacao(a) {
    
    if (window.document.getElementById('lista0').style.transform=="translateY(-150%)") 
    {
        if (a!='artigo') {
            window.document.getElementById('lista1').style.display="none"
window.document.getElementById('lista2-1').style.display="none"
        }
        else{
            window.document.getElementById('lista1').style.display="flex"
        window.document.getElementById('lista2-1').style.display="flex"
        }
        
       
    
        window.document.getElementById('lista0').style.transform="translateY(0%)"
        console.log('abriu!')
        window.document.getElementById('l1').style.transform="rotate(45deg) translateY(10px) "
        window.document.getElementById('l3').style.transform="rotate(-45deg) translateY(-10px)"
        window.document.getElementById('l2').style.opacity="0%"
    }
    else{
        console.log('fechou!')
        window.document.getElementById('lista0').style.transform="translateY(-150%)"
        window.document.getElementById('l1').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l3').style.transform="rotate(0deg) translateY(0px)"
        window.document.getElementById('l2').style.opacity="100%"

    }
    
}
function lista1() {
    if (window.document.getElementById('lista1').style.display=="none") {
        console.log('lista1 abriu')
        window.document.getElementById('lista1').style.display="flex"
        
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista2-1').style.display="none"
        
        
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



/*fechar as listas abertas*/
/*


 function fechar() {
     console.log('nou')
    window.document.getElementById('lista1').style.display="none"
    window.document.getElementById('item1').style.opacity="100%"
    c1=0
    window.document.getElementById('lista1-2').style.display="none"
    window.document.getElementById('item2').style.opacity="100%"
    c2=0
    window.document.getElementById('lista1-2').style.display="none"
    window.document.getElementById('item3').style.opacity="100%"
    c3=0
    
     
 }
setInterval(fechar(), 5000)*/