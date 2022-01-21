/*contadores*//*
var c0=0
var c1=0
var c2=0
var c3=0
var a=0
var b=0
var c=0
window.document.getElementById('cont_list1').style.display="none"
window.document.getElementById('lista0').style.display="none"
window.document.getElementById('lista1').style.display="none"
window.document.getElementById('lista2').style.display="none"
window.document.getElementById('lista3').style.display="none"

window.document.getElementById('listaa').style.display="none"
window.document.getElementById('listab').style.display="none"
window.document.getElementById('listac').style.display="none"
window.document.getElementById('menu-mobile').addEventListener("click", caixa1,false)

function caixa1(params) {
    
    
    if (c0==0) {
        c0++
        window.document.getElementById('cont_list1').style.display="grid"
        window.document.getElementById('lista0').style.display="flex"
    } else {
        
        window.document.getElementById('cont_list1').style.display="none"
window.document.getElementById('lista0').style.display="none"
c0--
    }

}
function caixa1_1(params) {
    
    if (c1==0) {
        c1++
        c2=0
        c3=0
        
        window.document.getElementById('link2').style.color="black"
        window.document.getElementById('link1').style.color="red"

        window.document.getElementById('lista2').style.display="none"
        window.document.getElementById('lista3').style.display="none"
        window.document.getElementById('lista1').style.display="flex"


        if (b!=0) {
            window.document.getElementById('listab').style.display="flex"
        } else {
            window.document.getElementById('listab').style.display="none"
        }
        window.document.getElementById('listac').style.display="none"


        if (a!=0) {
            window.document.getElementById('listaa').style.display="flex"
        } else {
            window.document.getElementById('listaa').style.display="none"
        }


        if (c!=0) {
            window.document.getElementById('listac').style.display="flex"
        } else {
            window.document.getElementById('listac').style.display="none"
        }
        



        
        
       
    } else {
        
        window.document.getElementById('link1').style.color="black"
window.document.getElementById('lista1').style.display="none"
c1--






window.document.getElementById('listac').style.display="none"
window.document.getElementById('listab').style.display="none"
window.document.getElementById('listaa').style.display="none"

    }
}
function caixa1_2(params) {
    
    if (c2==0) {
      
        c2++
        c1=0
        c3=0
       
        window.document.getElementById('link1').style.color="black"
        window.document.getElementById('link2').style.color="red"

        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista3').style.display="none"
        window.document.getElementById('lista2').style.display="flex"

        window.document.getElementById('listac').style.display="none"
        window.document.getElementById('listab').style.display="none"
        window.document.getElementById('listaa').style.display="none"
        

    } else {
        
        window.document.getElementById('link2').style.color="black"
window.document.getElementById('lista2').style.display="none"
c2--
    }
}
function caixa1_3(params) {
    
    if (c3==0) {
        
        c3++
        c1=0
        c2=0
        window.document.getElementById('link2').style.color="black"
        window.document.getElementById('link1').style.color="black"
        

        window.document.getElementById('lista1').style.display="none"
        window.document.getElementById('lista2').style.display="none"
        window.document.getElementById('lista3').style.display="flex"

        window.document.getElementById('listac').style.display="none"
        window.document.getElementById('listab').style.display="none"
        window.document.getElementById('listaa').style.display="none"

    } else {
        
        window.document.getElementById('link3').style.textDecoration="none"
window.document.getElementById('lista3').style.display="none"
c3--
    }
}
function caixa1a() {
  
    if (a==0) {
     
        a++
        b=0
        c=0
        window.document.getElementById('link5').style.color="black"
        window.document.getElementById('link6').style.color="black"
        window.document.getElementById('link4').style.color="red"
        window.document.getElementById('listac').style.display="none"
        window.document.getElementById('listab').style.display="none"
        window.document.getElementById('listaa').style.display="flex"

    } else {
        
        window.document.getElementById('link4').style.color="black"
window.document.getElementById('listaa').style.display="none"
a--
    }
}
function caixa1b(params) {
    if (b==0) {
     
        b++
        a=0
        c=0
        
        window.document.getElementById('link6').style.color="black"
        window.document.getElementById('link4').style.color="black"
        window.document.getElementById('link5').style.color="red"
        window.document.getElementById('listac').style.display="none"
        window.document.getElementById('listaa').style.display="none"
        window.document.getElementById('listab').style.display="flex"

    } else {
        
        window.document.getElementById('link5').style.color="black"
window.document.getElementById('listab').style.display="none"
b--
    }
}


function caixa1c(params) {
    if (c==0) {
     
        b=0
        a=0
        c++
        
        window.document.getElementById('link6').style.color="red"
        window.document.getElementById('link4').style.color="black"
        window.document.getElementById('link5').style.color="black"
        
        window.document.getElementById('listaa').style.display="none"
        window.document.getElementById('listab').style.display="none"
        window.document.getElementById('listac').style.display="flex"

    } else {
        
        window.document.getElementById('link6').style.color="black"
window.document.getElementById('listab').style.display="none"
c--
    }
}

*/