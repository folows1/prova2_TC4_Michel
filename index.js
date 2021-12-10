const senha = 'abc123'
const log = 'admin'

const start = () => {
    document.getElementById("button").onclick = checkNulls
    document.getElementById("form").onsubmit = checkLogin
}

const checkLogin = () => {
    document.getElementById("msg").innerHTML = ''
    event.preventDefault()
    const psw = document.getElementById("psw").value
    const login = document.getElementById("login").value
    if(senha === psw && login === log){
        console.log("login")
        window.location.href = 'pagina.html'
    }else{
        document.getElementById("msg").innerHTML = 'Usuário/Senha inválidos!'
    }
    document.getElementById("psw").value = ''
}

const checkNulls = () => {
    const psw = document.getElementById("psw").value
    const login = document.getElementById("login").value
    if(!psw && !login){
        document.getElementById("msg").innerHTML = 'Ambos campos são obrigatórios!'
    }else if(!login){
        document.getElementById("msg").innerHTML = 'Campo de Usuário deve ser preenchido!'
    }else if(!psw){
        document.getElementById("msg").innerHTML = 'Campo de Senha deve ser preenchido!'
    }
}





start()