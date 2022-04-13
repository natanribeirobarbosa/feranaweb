var whatsaap= {
    nome:[
        
    /*INSTALAÇÃO*/
    'Como instalar','Como apagar sua conta',

    /*como editar PERFIL*/
    'Como editar o seu perfil','Como mudar o papel de parede',

    /*como editar contatos*/
    'Como adicionar um contato',
    'Como adicionar um número de telefone internacional',
    'Como apagar um contato',
   
    
    
    /*como conversar*/
    'Como enviar mensagens de voz','Como responder a uma mensagem', 'Como formatar suas mensagens', 'Como usar emojis', 'Como usar figurinhas', 'Como enviar arquivos de mídia', 'Como editar fotos e vídeos', 'Como enviar e abrir arquivos de mídia de visualização única', 'Como configurar a tecla Enter', 'Como favoritar e desfavoritar uma mensagem', 'Como configurar o download automático','Como fazer chamadas de vídeo',
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

    /*funções*/
    'Como pesquisar no WhatsApp','Como usar a conversa em um clique','Como liberar espaço de armazenamento no Whatsaap', 'Como escanear um código QR do WhatsApp','Como visualizar seu código QR do WhatsApp',
    'Como compartilhar seu código QR do WhatsApp',
    'Como redefinir seu código QR do WhatsApp',
    'Como escanear um código QR do WhatsApp de uma empresa',

    /*configurações da conta*/
    'Como mudar o idioma do WhatsApp',

    /*como editar conversas e mensagens*/
    'Como fixar uma conversa','Como salvar seu histórico de conversas', 'Como limpar conversas', 'Como apagar conversas', 'Como restaurar seu histórico de conversas', 'Como gerenciar suas notificações', 'Como configurar os sons de uma conversa',  'Como ativar e desativar as mensagens temporárias', 'Como mudar o número de telefone',
    
    /*grupos*/
     'Como criar um grupo e convidar participantes', 'Como adicionar e remover participantes de um grupo', 'Como mencionar participantes em um grupo', 'Como gerenciar admins de um grupo', 'Como silenciar ou reativar notificações de grupos', 'Como sair de um grupo e apagá-lo', 'Como mudar os dados de um grupo', 'Como mudar as configurações de admin do grupo', 
    'Como arquivar ou desarquivar uma conversa ou um grupo', 
    
    /*compras no app*/
     ,'Como iniciar uma conversa no WhatsApp pela página de uma Loja do Facebook',
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
    'Como manter a segurança no WhatsApp'














],
    link:[]
}
for (let index = 0; index < whatsaap.nome.length; index++) {
    const element = whatsaap.nome[index];
    console.log(index,element);
}

var tamanhowhatsaap = {
    nome:[whatsaap.nome.length],
    link:[whatsaap.link.length]
}





var contwhatsaap=0
let contador=0
let c=0
document.getElementById('esconder').innerHTML=""
document.getElementById('vermais').innerHTML=""

function tutoriaiswhatsaap() {
if (contwhatsaap==0) {
    document.getElementById('esconder').innerHTML="esconder[x]"
    document.getElementById('vermais').innerHTML="ver mais[v]"
    document.getElementById('whats').style.background="rgba(197, 197, 197, 0.8)"
    document.getElementById('whats').style.color="black"


    while (c<tamanhowhatsaap.nome) {

        
        let ultimoa=document.querySelector('div.tutoriais a:last-of-type')
        var listatutoriais=document.querySelector('div.tutoriais')
    
        listatutoriais.innerHTML+='<a href="tutoriaisWhatsaap/tutorial'+c+'" class="tutorial"><div class="iconedotutorial"><img class="iconederedesocial" src="imagens/whatsapp.png" alt=""></div><h1>'+whatsaap.nome[c]+'</h1></a>'

            c++
      
        
        contwhatsaap=1
        
        if (c==12) {
            return
        }

        
    }
} 
else {
    document.getElementById('whats').style.background="rgba(71, 71, 71, 0.685)"
    document.getElementById('whats').style.color="white"
    document.getElementById('listadetutoriais').innerHTML=''
    contwhatsaap=0
    console.log(contwhatsaap);
    c=0
    document.getElementById('esconder').innerHTML=""
document.getElementById('vermais').innerHTML=""
}


}
function vermais() {

    while (c<tamanhowhatsaap.nome){
    let ultimoa=document.querySelector('div.tutoriais a:last-of-type')
    var listatutoriais=document.querySelector('div.tutoriais')
    listatutoriais.innerHTML+='<a href="tutoriaisWhatsaap/tutorial'+c+'" class="tutorial"><div class="iconedotutorial"><img class="iconederedesocial" src="imagens/whatsapp.png" alt=""></div><h1>'+whatsaap.nome[c]+'</h1></a>'
    c++
    contwhatsaap=1
  
    if (c==24||c==36||c==48||c==60) {
        
        return
    }}
}
