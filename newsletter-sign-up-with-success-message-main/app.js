
const emailInput = document.getElementById("email");
const button = document.getElementById("btn");
const container = document.querySelector(".container_3")
const container2 = document.querySelector(".container_2")
const container1 = document.querySelector(".container")
const adress = document.getElementById('adress')

const validarUsuario = function validar(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.(com\.br)$/i;
    
    const isValid = regex.test(email);
    
    return isValid;
};

// Função para ajustar a cor de fundo com base na validade do email
const ajustarCorDeFundo = function ajustarCorDeFundo(emailInput, isValid) {

    if(isValid){

        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = ""
    }
    else{
            emailInput.style.backgroundColor = "hsl(3, 100%, 88%)"
            emailInput.style.borderColor = "#f25f52"
    }    
} 

const mensagemErro = function mensagemErro(invalidEmail,isValid) {
    // Busque o elemento `span` com a classe `.invalidMessage`
    invalidEmail = container.querySelector('.invalidMessage');

    // Se `isValid` for falso (email inválido) e `invalidEmail` não existe, crie um novo `span` com a mensagem de erro
    if (!isValid && !invalidEmail) {

        invalidEmail = document.createElement('span');
        invalidEmail.textContent = 'Valid Email Required';
        invalidEmail.className = 'invalidMessage';
        adress.appendChild(invalidEmail);
    }
    
    if (isValid) {
            // Oculte a mensagem de erro quando o email é válido
            invalidEmail.style.display = 'none';
    } else {
            // Exiba a mensagem de erro quando o email é inválido
            invalidEmail.style.display = 'flex';
    }
    return invalidEmail;
}
const sucesso = function sucesso(isValid) {
    // Se o email for válido

    if (isValid) {
        //remove a div pai
        container2.parentElement.removeChild(container2);

        // Crie um novo elemento `div` com a classe 'success'
        const containerSucess = document.createElement('div');
        containerSucess.classList.add('success');
        container1.appendChild(containerSucess);

        const icon = document.createElement('link');
        icon.rel = 'stylesheet';
        icon.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(icon);

        const divSpan = document.createElement('div');

        divSpan.classList.add('fa-solid','fa-circle-check', 'fa-4x');

        divSpan.style.color = '#f25f52';

        containerSucess.appendChild(divSpan);

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Thanks for subscribing!'
        containerSucess.appendChild(title);

        const text = document.createElement('p');
        text.classList.add('text');
        text.innerText = 'A confirmantion email has been set to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription'
        containerSucess.appendChild(text);

        const btn_2 = document.createElement('button');
        btn_2.textContent = 'Dismiss massage';
        btn_2.classList.add('btn_2');
        containerSucess.appendChild(btn_2);

    } else {
        ajustarCorDeFundo(emailInput, isValid);
        mensagemErro(emailInput, isValid);
    }
}
        

btn.addEventListener("click", (event) => {

    const str = '';
    event.preventDefault();

    const valor = emailInput.value;
    
    const resultado = validarUsuario(valor);
    
    sucesso(resultado);
 
});

emailInput.addEventListener("keyup", (event)=>{

    if(event.code === 'Backspace'){

        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = ""

        const invalidEmailMessage = document.querySelector('.invalidMessage');

        if(invalidEmailMessage){
            invalidEmailMessage.style.display = 'none';
        }
    }
});
