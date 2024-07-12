function confirmarSenha(){
    var password = document.getElementById("senha").value;
    var Password = document.getElementById("Senha").value;
    
    if (password.length >= 8 && Password.length >= 8 && password === Password) {
        alert('Senha Válida!');
        window.location.href = 'receitasdavovo.html'
    } 
    else {
        alert('Senha INVÁLIDA!!');
        window.location.href = 'paginasenha.html'
    }
}
function Confirmarsenha(){
    var password = document.getElementById("senha").value;
    if(password.length>=8){
        alert('Senha Válida!')
        window.location.href = 'receitasdavovo.html'
    }
    else{
        alert('Senha INVÁLIDA!!')
        window.location.href = 'primeiroacesso.html'
    }
}