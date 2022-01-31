/*contadores*/
window.document.getElementById('lista0').style.transform="translateY(-150%)"

function artigoselecionado(art) {
    console.log(art)
            
             
                    if (art==1) {
                        window.document.getElementById('i31').style.fontWeight="600"
                        apagar('i31') 
                            
                        
                    }
                    if (art==2) {
                        console.log('2')
                        window.document.getElementById('i32').style.fontWeight="600"
                        apagar('i32') 
                    }
                
                function apagar(a) {

                    window.document.getElementById('i31').style.fontWeight="normal"
                    window.document.getElementById('i32').style.fontWeight="normal"

                    window.document.getElementById(a).style.fontWeight="600"

                }
                }

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
        window.document.getElementById('i1').style.fontWeight="600"
    }
    else{
        console.log('lista1 fechou')
        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista2-1').style.display="none"
        window.document.getElementById('i1').style.fontWeight="normal"
        window.document.getElementById('i21').style.fontWeight="normal"
        
    }
 
}

/*function lista12() {
    if (c2==0) {
        window.document.getElementById('lista1-2').style.display="flex"
        window.document.getElementById('item2').style.opacity="80%"
        c2++
    } else {
        window.document.getElementById('lista1-2').style.display="none"
        window.document.getElementById('item2').style.opacity="100%"
        c2--
    }
}

function lista13() {
    if (c3==0) {
        window.document.getElementById('lista1-3').style.display="flex"
        window.document.getElementById('item3').style.opacity="80%"
        c3++
    } else {
        window.document.getElementById('lista1-3').style.display="none"
        window.document.getElementById('item3').style.opacity="100%"
        c3--
    }
}
*/
function lista21() {
    if (window.document.getElementById('lista2-1').style.display=="none") {
        window.document.getElementById('lista2-1').style.display="flex"
        window.document.getElementById('i21').style.fontWeight="600"
    }
    else{
        window.document.getElementById('lista2-1').style.display="none"
        window.document.getElementById('i21').style.fontWeight="normal"
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