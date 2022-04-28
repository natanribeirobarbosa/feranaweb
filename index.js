// Todos os tutoriais
const tabela=[
    maisLidosVetor=[todos=['Como instalar','kkkkkkkkkk','vetorWhatsaap'],
                    whatsaap=['Como instalar','kkkkkkkkkk','vetorWhatsaap'],
                    facebook=[],
                    instagram=[]],
    whatsaapVetor=[todos=[
            /*INSTALAÇÃO*/
            'Como instalar',
        
            /*como editar PERFIL*/
            'Como editar o seu perfil','Como mudar o papel de parede',
        
            /*como editar contatos*/
            'Como adicionar um contato',
            'Como adicionar um número de telefone internacional',
            'Como apagar um contato',
           
            
            
            /*como conversar*/
            'Como enviar mensagens de voz','Como responder a uma mensagem', 'Como formatar suas mensagens', 'Como usar emojis', 'Como usar figurinhas', 'Como enviar arquivos de mídia', 'Como editar fotos e vídeos', 'Como enviar e abrir arquivos de mídia de visualização única', 'Como configurar a tecla Enter', 'Como configurar o download automático','Como fazer chamadas de vídeo',
            'Como fazer chamadas de voz',
            'Como fazer uma chamada de voz em grupo',
            'Como fazer chamadas de vídeo em grupo',
            'Como usar o recurso de chamadas em espera',
            'Como adicionar ou remover sua conta do WhatsApp no Portal',
            'Como chamar um contato do WhatsApp no Portal',
            'Como alternar entre chamadas de voz e vídeo do WhatsApp no Portal',
            
            /*status*/
                'Como usar o status',
            'Como silenciar ou reativar as atualizações de status de um contato',
            'Como apagar uma atualização de status',
            'Como encaminhar uma atualização de status',
            'Como compartilhar sua atualização de status do WhatsApp em outros apps',
        
            /*ferramentas*/
            'Como pesquisar no WhatsApp','Como usar a conversa em um clique','Como liberar espaço de armazenamento no Whatsaap', 'Como escanear um código QR do WhatsApp','Como visualizar seu código QR do WhatsApp',
            'Como compartilhar seu código QR do WhatsApp',
            'Como redefinir seu código QR do WhatsApp',
            'Como escanear um código QR do WhatsApp de uma empresa',
        
            /*configurações da conta*/
            'Como mudar o idioma do WhatsApp',
            'Como mudar o número de telefone',
            'Como apagar sua conta',
        
            /*como editar conversas e mensagens*/
            'Como favoritar e desfavoritar uma mensagem',
            'Como fixar uma conversa','Como salvar seu histórico de conversas', 'Como limpar conversas', 'Como apagar conversas', 'Como restaurar seu histórico de conversas', 'Como gerenciar suas notificações', 'Como configurar os sons de uma conversa',  'Como ativar e desativar as mensagens temporárias', 
            
            /*grupos*/
             'Como criar um grupo e convidar participantes', 'Como adicionar e remover participantes de um grupo', 'Como mencionar participantes em um grupo', 'Como gerenciar admins de um grupo', 'Como silenciar ou reativar notificações de grupos', 'Como sair de um grupo e apagá-lo', 'Como mudar os dados de um grupo', 'Como mudar as configurações de admin do grupo', 
            'Como arquivar ou desarquivar uma conversa ou um grupo', 
            
            /*compras no app*/
            'Como iniciar uma conversa no WhatsApp pela página de uma Loja do Facebook',
            'Como aderir à conversas com empresas','Como enviar dinheiro','Como receber dinheiro','Como configurar uma forma de pagamento','Como verificar um cartão','Como remover um cartão do Facebook Pay',
            'Como visualizar o histórico de transações','Como solicitar os dados da sua conta de pagamentos',
            'Como remover o Facebook Pay',
        
            /*segurança e privacidade*/
            'Como bloquear e denunciar contatos',
            'Como usar o bloqueio por impressão digital no Android',
            'Como denunciar um catálogo ou empresa',
            'Adicionando uma senha',
            'Como verificar as confirmações de leitura',
            'Como as empresas perto de você são exibidas no seu histórico de pesquisa',
            'Como mudar as configurações de privacidade dos grupos',
            'Como saber se meu número foi bloqueado por alguém',
            'Como manter a segurança no WhatsApp'],
        instalação = ['s','a','eojgnojffndjo'],
        perfil = ['reerere'],
        contatos = ['wwwwww'],
        // conversas = whatsaap.slice(6,24),
        // status = whatsaap.slice(24,29),
        // ferramentas = whatsaap.slice(29,37),
        // configuracoes = whatsaap.slice(37,40),
        // editarConversas = vetorWhatsaap.slice(40,49),
        // Grupos = vetorWhatsaap.slice(49,58),
        // compras = vetorWhatsaap.slice(58,68),
        // Segurança = vetorWhatsaap.slice(68,77)
        ],
    facebook=[],
    instagram=[]
    // twitter=[],
    // telegram=[],
    // gmail=[],
    // discord=[],
    // canva=[],k=[]
    ]

/*nomes das tecnologias*/
const Tecnologias=['Mais lidos',
    'Whatsaap','Youtube',   
    'Facebook','Messenger',
    'Instagram','LinkedIn','Pinterest','Twitter','Telegram','TikTok','Snapchat',
    'Word',
    'Excel',
    'PowerPoint',
    'Teams',
    'MicrosoftOutlook',
    'OneDrive'
]

/*nome dos indices das tecnologias*/
const Indices = [
MaisLidos=['Todos'],
Whatsaap=['todos','instalação','perfil','contatos'],
Youtube=[],
Facebook=[],
Messenger=[],
Instagram=[],
LinkedIn=[],
Pinterest=[],
Twitter=[],
Telegram=[],
TikTok=[],
Snapchat=[],
Word=[],
Excel=[],
PowerPoint=[],
Teams=[],
MicrosoftOutlook=[],
OneDrive=[]
]
    
/*Campo de pesquisa*/
var pesquisa=document.getElementById('pesquisa')
/*Lista de tutoriais*/
var listatutoriais=document.querySelector('div.tutoriais')
/*Filtro dos artigos e notícias*/
var filtroArtigos=document.getElementById('filtroArtigos')
/*Filtro de todas as tecnologias*/
var filtro1=document.getElementById('filtro1')
/*filtro dos índice dos tutoriais*/
var filtro2=document.getElementById('filtro2')




//Adicionar as tecnologias nas listas
document.getElementById('lista0').innerHTML='<a href="#tutoriais" class="itensdomenu">Tutoriais</a><a class="itensdomenu" href="#">Artigos e notícias</a><a href="#" class="itensdomenu">Configurações</a>'
document.getElementById('lista0').innerHTML+='<ul id="tecnologias"></ul>'



function menu(b){
    let botao= filtro1.children[b]
    if (botao.style.background=="rgba(240,240,240,1)") {
        return
    }
    
    addEventoFiltro1()
    botao.style.background="rgba(240,240,240,1)"
    botao.style.color="rgba(10,10,10,1)"
    filtro2.children[0].removeEventListener("mouseenter", mouseenter)
    filtro2.children[0].removeEventListener("mouseout", mouseout)
}





var tecnologiaAtiva=tabela[0]/*tecnologia ativa no momento*/
var indiceAtivo;/*indice ativo no momento*/
var listaDeTutoriaisAtiva;
var botoesDasPaginas=document.getElementById('vermais')
var contador=0;
document.getElementById('esconder').addEventListener('click',function() {
    if (document.getElementById('listadetutoriais').style.display=="none") {
        document.getElementById('listadetutoriais').style.display="grid"
        document.getElementById('esconder').innerHTML="esconder[x]"
    }
    else{
    document.getElementById('listadetutoriais').style.display="none"
    document.getElementById('esconder').innerHTML="mostar[v]"
}
})



for (const key in Indices)/*Adiciona os botões das tecnologias no filtro1 quando a página é carregada*/{
    if (key>=2){
        filtro1.innerHTML+='<button id="botao'+parseInt(key+1)+'Filtro1" onclick="erro('+key+')">'+Tecnologias[key]+'⏱</button>'
    }
    else{
    filtro1.innerHTML+='<button id="botao'+parseInt(key+1)+'Filtro1" onclick="addIndices('+key+'),addTutoriais('+0+')">'+Tecnologias[key]+'</button>'
    }
}

function erro(a)/*caso o tutorial seja >= á 2, o usúario não poderá finalizar a tarefa*/{
    window.alert('Os tutoriais de '+Tecnologias[a]+' serão lançados em breve! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
}

/*adiciona os primeiros indices e tutoriais quando a página é carregada*/
addIndices(0)
addTutoriais(0)

addEventoArtigos()//adiciona os eventos nos artigos, lista1 e lista2*/
addEventoFiltro1()
addEventofiltro2()

function addIndices(a)/*esta função é chamada quando o usúario clica em uma tecnologia(filtro1), para mostrar os indices e os primeiros tutoriais */{

    if (a>=2){
        erro(a)
    }
    indiceAtivo = Indices[a]
    tecnologiaAtiva = tabela[a]
    filtro2.innerHTML=''

    for (const key in Indices[a]/*Indices[a] seleciona todos os elementos do vetor Indices na posição "a"*/) {
    filtro2.innerHTML+='<button id="botao'+parseInt(key+1)+'filtroDosIndices" onclick="addTutoriais('+key+')" >'+indiceAtivo[key]+'('+tecnologiaAtiva[key].length+')</button>'
    }

    /*Se esta função foi chamada, então um botão de tecnologia foi clicado, e sempre quando é clicado o primeiro indice volta a ser mostrado primeiro, ficando destacado*/
    filtro2.children[0].style.background="rgba(240,240,240,1)"
    filtro2.children[0].style.color="rgba(10,10,10,1)"
    filtro2.children[0].removeEventListener("mouseenter", mouseenter)
    filtro2.children[0].removeEventListener("mouseout", mouseout)
}


function addTutoriais(b)/*esta função é chamada quando o usúario clica em uma indice (filtro2),para mostrar todos tutoriais*/{
    botoesDasPaginas.innerHTML=''
    if (tecnologiaAtiva[b]==listaDeTutoriaisAtiva)/*Se os tutoriais já estão dispostos, a tarefa não é finalizada*/{
        return
    }

    listaDeTutoriaisAtiva=tecnologiaAtiva[b]
    listatutoriais.innerHTML=''

    for (const key in listaDeTutoriaisAtiva) {
    listatutoriais.innerHTML+='<a id="tutorial'+(parseInt(key)+1)+'" href="" class="tutorial"><div class="iconedotutorial"><img class="iconederedesocial" src="imagens/whatsapp.png" alt=""></div><h1>'+(parseInt(key)+1)+'- '+listaDeTutoriaisAtiva[key]+'</h1></a>'


    if (key>=13) {

        var numeroDeBotoes = listaDeTutoriaisAtiva.length/13
        botoesDasPaginas.innerHTML=''

        let cont=0
        while (cont<numeroDeBotoes) {
            botoesDasPaginas.innerHTML+='<span id="botao'+cont+'verMais" onclick="verMais('+cont+')" onmouseenter="animacaoverMais('+cont+')" class="vermais"></span>'
            cont++
        }
        verMais(0)
        break

    }
    }
}

var botaoAtual=0
function verMais(a){

    if (botaoAtual!=0) {
        botaoAtual.style.opacity="60%"
        botaoAtual.style.boxShadow="unset"
    }

    botaoAtual=document.getElementById('botao'+a+'verMais')
    botaoAtual.style.opacity="100%"
    botaoAtual.style.boxShadow="0px 0px 15px 1px white"

    
    a=a+1
    
    let maximo=a*14
    let minimo = maximo-14
    let diferença = 0
    if (maximo>listaDeTutoriaisAtiva.length) {
        diferença=maximo-listaDeTutoriaisAtiva.length
        maximo= maximo-diferença
        console.log('diferença: '+diferença);
    }
    // let minimo = maximo-diferença
    console.log('maximo=> '+maximo);
    console.log('minimo=> '+minimo);

    console.log(maximo);
    console.log(listaDeTutoriaisAtiva.length);

    listatutoriais.innerHTML=''
    while (minimo<maximo) {
        listatutoriais.innerHTML+='<a id="tutorial'+(parseInt(minimo+1))+'" href="" class="tutorial"><div class="iconedotutorial"><img class="iconederedesocial" src="imagens/whatsapp.png" alt=""></div><h1>'+(parseInt(minimo+1))+'- '+listaDeTutoriaisAtiva[minimo]+'</h1></a>'
    
    minimo++
    }
    

}

function animacaoverMais(a){
    if (botaoAtual.id=='botao'+a+'verMais') {
        return
    }
    else{
    let botaoverMais=document.getElementById('botao'+a+'verMais')
    botaoverMais.style.opacity="100%"
    botaoverMais.style.boxShadow="0px 0px 15px 1px white"
    botaoverMais.addEventListener("mouseleave",function() {
        if (botaoAtual.id!='botao'+a+'verMais') {
            botaoverMais.style.opacity="60%"
            botaoverMais.style.boxShadow="unset"
        }
        
    })}
}




//Quando o script é carregado pela primeira vez, os promeiros botões são acionados por padrão
filtroArtigos.children[0].style.background="rgba(240,240,240,1)"
filtroArtigos.children[0].style.color="rgba(10,10,10,1)"
filtroArtigos.children[0].removeEventListener("mouseenter", mouseenter),
filtroArtigos.children[0].removeEventListener("mouseout", mouseout)
filtro1.children[0].style.background="rgba(240,240,240,1)"
filtro1.children[0].style.color="rgba(10,10,10,1)"
filtro1.children[0].removeEventListener("mouseenter", mouseenter)
filtro1.children[0].removeEventListener("mouseout", mouseout)
filtro2.children[0].style.background="rgba(240,240,240,1)"
filtro2.children[0].style.color="rgba(10,10,10,1)"
filtro2.children[0].removeEventListener("mouseenter", mouseenter)
filtro2.children[0].removeEventListener("mouseout", mouseout)

//função do evento de entrada do mouse
function mouseenter() {
    this.style.background="rgb(215, 215, 215)"
    this.style.color="black"
}
//função do evento de saída do mouse
function mouseout(){
    this.style.background="none"
    this.style.color="white"
}

//Função que adiciona os disparadores de eventos dos botões
// function addEventosTecnologias() {
//     let i=0
//     while (i<document.getElementById('tecnologias').children.length) {
//         let botao= document.getElementById('tecnologias').children[i]
//         if (i<=2) {
//           botao.addEventListener("click",function(){
//             botao.style.background="rgba(240,240,240,1)"
//             botao.style.color="rgba(10,10,10,1)"
//           })   
//         }
//         i++
//         }
//         i=0
//     }


function addEventoFiltro1(){
    let i=0
    while (i<filtro1.children.length) {
        let botao= filtro1.children[i]
        botao.style.background="none";
        botao.style.color='white'
        botao.addEventListener("mouseenter",mouseenter)
        botao.addEventListener("mouseout",mouseout)
        if (i<=1) {
          botao.addEventListener("click",clickFiltro1)   
        }
        i++
        }
        i=0
    }


function addEventofiltro2(){
    let i=0
    while (i<filtro2.children.length) {
        let botao= filtro2.children[i]
        botao.style.background="none";
        botao.style.color='white'
        botao.addEventListener("mouseenter",mouseenter)
        botao.addEventListener("mouseout",mouseout)
        botao.addEventListener("click",clickFiltro2)
        i++
    }
   
    i=0
}
function addEventoArtigos(){
    let i =0
    while (i<filtroArtigos.children.length) {
        let botao= filtroArtigos.children[i]
        botao.style.background="none";
        botao.style.color='white'
        botao.addEventListener("mouseenter",mouseenter)
        botao.addEventListener("mouseout",mouseout)
        botao.addEventListener("click",clickArtigos)
        i++   
    }
    i=0
}

let botao;
function clickFiltro1() {
    
    addEventoFiltro1()
    addEventofiltro2()
   
  
    botao = this
   

    botao.style.background="rgb(240,240,240)"
    botao.style.color="black"
    botao.removeEventListener("mouseenter", mouseenter)
    botao.removeEventListener("mouseout", mouseout)

filtro2.children[0].style.background="rgba(240,240,240,1)"
filtro2.children[0].style.color="rgba(10,10,10,1)"
filtro2.children[0].removeEventListener("mouseenter", mouseenter)
filtro2.children[0].removeEventListener("mouseout", mouseout)
filtro2.children[0].removeEventListener("click", clickFiltro1)

}

let botao2;
//função que retira os disparadores de eventos dos botões
function clickFiltro2() {
    // if (!!a) {
    //     a=this
        
    // a.style.background="rgb(240,240,240)"
    // a.style.color="black"
    // a.removeEventListener("mouseenter", mouseenter)
    // a.removeEventListener("mouseout", mouseout)
    // }
    // if (this==botao2) {
    //     clickFiltro2()
    //     return
    // }
    // console.log(this);
    addEventofiltro2()
    botao2 = this
    botao2.style.background="rgb(240,240,240)"
    botao2.style.color="black"
    botao2.removeEventListener("mouseenter", mouseenter)
    botao2.removeEventListener("mouseout", mouseout)
}

function clickArtigos() {

    addEventoArtigos()
    this.style.background="rgb(240,240,240)"
this.style.color="black"
this.removeEventListener("mouseenter", mouseenter)
this.removeEventListener("mouseout", mouseout)

}
// primeIndice()
// function primeIndice() {
   
// filtro2.children[0].style.background="rgba(240,240,240,1)"
// filtro2.children[0].style.color="rgba(10,10,10,1)"
// filtro2.children[0].removeEventListener("mouseenter", mouseenter)
// filtro2.children[0].removeEventListener("mouseout", mouseout)
// }






// function mostrarTutoriais(a) {

//     if (a==tecnologiaAtiva) {
//         return
//     }
//     tecnologiaAtiva=a
    
//   console.log(tecnologiaAtiva);

    


//     if (Tecnologias.length==0) {
//             window.alert('Esses tutoriais serão lançados em breve! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
//         return
//     } else {
//         listatutoriais.innerHTML=''

//         //colocando todos os botões de filtros da tecnologia(filtro2)
//         filtro2.innerHTML=''
//         for (const key in Tecnologias) {
//             let indice=Tecnologias[key]
//                 filtro2.innerHTML+='<button onclick="mostrarTutoriais('+Tecnologias[key]+')" id="botao'+parseInt(key+1)+'Filtro2">'+Tecnologias[key]+'</button>'
        
//         }
//         // for (i in Tecnologias) {
//         //     listatutoriais.innerHTML+='<a id="tutorial'+(parseInt(i)+1)+'"href="'+Tecnologias+'/tutorial'+i+'" class="tutorial"><div class="iconedotutorial"><img class="iconederedesocial" src="imagens/whatsapp.png" alt=""></div><h1>'+(parseInt(i)+1)+'- '+Tecnologias[i]+'</h1></a>'
      
//         // }


//     }

   
 
// }
// function indicezap(a) {
  
//    for (const i in Tecnologias) {
//     listatutoriais.children[i].style.display="none"
//    }

// for (const i in a) {
//     let n=Tecnologias.indexOf(a[i])
//     console.log(n);
//     listatutoriais.children[n].style.display="flex"
// }

// }



/*função de pesquisa*/
pesquisa.onkeyup=function(e){
    t=this.value
  
    // if (t=='') {
    //     for (const i in whatsaap.nome) {
    //         listatutoriais.children[i].style.display="flex"
    //     }
    // }
    
    var a = [];
    for (const i in listaDeTutoriaisAtiva) {
        
        // let nova=a.push(ult)
        
        a[i]=listaDeTutoriaisAtiva[i].toLowerCase();
      
       
        
    }
    
  
    


    for (i in a) {
       if (a[i].match(t)) {
        listatutoriais.children[i].style.display="flex"

       } else {
        listatutoriais.children[i].style.display="none"

       } 
    }
}
