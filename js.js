 var c1=0
 function botaomenumobile() {
     

  console.log(c1)
    if (c1==0) {
       c1=c1+1
       
        document.querySelector('.header2').style.display="block"
        
    } else {
        c1=0
        document.querySelector('.header2').style.display="none"
       
        
    }
   
  
 }