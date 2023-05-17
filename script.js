let firstName = document.querySelector('#first_name');
let resName = document.querySelector('#resName');
let validName = false

let company = document.querySelector('#company');
let resCompany = document.querySelector('#resCompany');
let validCompany = false

let telephony = document.querySelector('#telephony');
let resTelephony = document.querySelector('#resPhone');
let validTelephony = false;

let email = document.querySelector('#email');
let resEmail = document.querySelector('#resEmail');
let validEmail = false;

let messege = document.querySelector('#messege');
let resMessege = document.querySelector('#resMessege');
let validMessege = false;

let inputCadastro = document.getElementById('input-cadastro')
var respErro = document.getElementById('respErro');
var respSucesso = document.getElementById('respSucesso');

let cnpj = document.querySelector('#cnpj');
let resCnpj = document.querySelector('#resCnpj');
let validCnpj = false;

let assunto = document.querySelector('#subject');
let resAssunto = document.querySelector('#resAssunto')

let checkbox = document.querySelector("#termos_de_contrato") 
checkbox = false
let labelCheck = document.querySelector(".form-check-label")
let btn = document.querySelector('#btn');
let inputCaptcha = document.querySelector('#input-captcha')
let validCaptcha = false

//eventos da validação geral
firstName.addEventListener('input', validar);
company.addEventListener('input', validar);
telephony.addEventListener('input', validar);
email.addEventListener('input', validar);
messege.addEventListener('input', validar);
cnpj.addEventListener('input', validar);
inputCaptcha.addEventListener('input', validar);



function validaName (){
    
    if(firstName.value == ''){
        firstName.style.borderBlockColor = ' #CA1C2A'
        resName.innerHTML = '*Nome: ';		
        resName.style.color = '#CA1C2A'
        firstName.focus();
    }else if (firstName.value.length < 15 || firstName.value.length >= 60 ){
        firstName.style.borderBlockColor = ' #CA1C2A'
        resName.innerHTML = '*Nome *Insira no min. 15 caracteres';
        resName.style.color = '#CA1C2A';
        validName = false;
      }else{
        resName.innerHTML='Nome: ';  
        resName.style.color = 'black'
        firstName.style.borderBlockColor = ' #008000'
        resName.style.fontSize = ' 0.9rem'
        validName = true;
      }  
}      

function validaCompany (){

    if(company.value == ''){
        company.setAttribute  = 'borderBlockColor: #CA1C2A'
        resCompany.innerHTML = '*Empresa: ';		
        resCompany.style.color = '#CA1C2A'
        company.focus();

    }else if (company.value.length < 3 || company.value.length >= 60 ){
        company.style.borderBlockColor = ' #CA1C2A'
        resCompany.innerHTML = '*Empresa:';	
        resCompany.style.color = '#CA1C2A'
        validCompany = false;

      }else{
        company.style.borderBlockColor = ' #008000'  
        resCompany.innerHTML='Empresa: ';
        resCompany.style.color = 'black';
        validCompany = true;
    }    
}    

function validaTelephony(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)

    if(telephony.value.length > 13){
        resTelephony.style.color = 'black';
        telephony.style.borderBlockColor = ' #008000'
        resTelephony.innerHTML='Telefone:';
        validTelephony = true;
    }else{
        telephony.style.borderBlockColor = ' #CA1C2A'
        resTelephony.innerHTML='*Telefone: ';	
        resTelephony.style.color = '#CA1C2A';
        validTelephony = false;  
    }    
}    
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}    
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;

}    

function validaEmail(emaill){

    let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
     
       if(email.value==''){
           email.style.borderBlockColor = ' #CA1C2A'
           resEmail.innerHTML ='*Email:';		
          resEmail.style.color = '#CA1C2A' 
          email.focus();
          validEmail = false;
          //verifica se o email possui um @ e de 2 a 3 caracteres após o ponto
        } else if (!ev.test(emaill)) {
          email.style.borderBlockColor = '#CA1C2A'  
          resEmail.innerHTML = '*Email Inválido';		
          resEmail.style.color = '#CA1C2A';
        }else{
            resEmail.style.color = 'black'
            resEmail.innerHTML ='Email: ';	
            email.style.borderBlockColor = ' #008000'
            validEmail = true;
        }    
}        
function validaMessege (){
    
    if(messege.value.length == ''){
        messege.style.borderBlockColor = '#CA1C2A'
        resMessege.innerHTML = 'Mensagem: ';		
        resMessege.style.color = '#CA1C2A'
        messege.focus();
    }else{
        resMessege.innerHTML='Mensagem: ';
        resMessege.style.color = 'black'
        messege.style.borderBlockColor = ' #008000'
        resMessege.style.fontSize = ' 0.9rem'
        validMessege = true;       
    }    
}    
//formatação do regex do cnpj
cnpj.addEventListener('input', 
function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
});    

cnpj.addEventListener('input', validaCNPJ)

function validaCNPJ(){
    
    if (cnpj.value.length >= 18) {
        resCnpj.style.color = 'black'
        resCnpj.innerHTML='CNPJ: ';	
        cnpj.style.borderBlockColor = ' #008000'
        validCnpj = true;
        console.log(validCnpj)
    } else {
        cnpj.style.borderBlockColor = ' #CA1C2A'   
        resCnpj.innerHTML='*CNPJ:';	
        resCnpj.style.color = ' #CA1C2A'
        cnpj.focus();
        validCnpj = false;
    }    
    
}    

//função para verificar se o campo possui apenas acentos e letras
function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }    
        if (
            
            (charCode == 32) || 
            (charCode == 63) ||
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
            ){
            return true;    
        } else {
            return false;
        }    
    } catch (err) {
        alert(err.Description);
    }    
}    

// validação com o recaptcha
const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
icon = document.querySelector ('.fa-redo-alt'),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");
    
    //listas com as letras e números 
    let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                         'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                         't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                         function getCaptcha(){
                             for (let i = 0; i < 6; i++) { //pega 6 caracter de forma aleatória
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomCharacter}`; //aqui ele passa 6 caractere para o captcha

      }
    }
    getCaptcha(); //chama getCaptcha quando a página abrir
    // evento de click para atualizar e chamar get captcha para novos cacteres da lista
    reloadBtn.addEventListener("click", ()=>{
        removeContent();
      getCaptcha(); 
      icon.style.transform = 'rotate(360deg)'
    });
    
    //função de validação do input e seu valor de caracter
    function validaCaptcha(){
        if (inputCaptcha.value < 6 ){
                validCaptcha = false
                btn.disabled = false;
        }else{
                validCaptcha = true  
        }
    }
    
    checkBtn.addEventListener("click", e =>{
        e.preventDefault(); //impede o botão do seu comportamento padrão
      statusTxt.style.display = "block";

      //adiciona um espaço entre cada caracter 
      let inputVal = inputField.value.split('').join(' ');

      if(inputVal == captcha.innerText){ // se o caracter for aceito/responder
        checkBtn.innerHTML = '';
        checkBtn.className = 'fa fa-check';
        checkBtn.style.background = 'green'
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "você não é um rôbo.";
        setTimeout(()=>{ //chamando removeContent getCaptcha após 2 segundos
            removeContent();
          getCaptcha();
        }, 2000);

        btn.disabled = false;
        btn.style = 'background-color: green'
        btn.style.cursor = 'pointer' 
      }else{
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Sequência Errada";
    }
});

// função para remover o que já está escrito dentro do input ao atualizar e receber um nova sequência de códigos
function removeContent(){
     inputField.value = "";
     captcha.innerText = "";
     statusTxt.style.display = "none";
     icon.style.transform = 'rotate(360deg)'
}
    //validação geral com o evento input para veficar se cada campo está Preenchido com todos os requisitos solicitados
function validar(){
    
    if (validName && validCompany && validTelephony && validEmail && validMessege && validCnpj && validCaptcha){  
        respSucesso.style.color = '#000'
        respSucesso.style.fontSize = '0.8rem'
        respSucesso.innerHTML = 'Formulário Preenchido'
        respErro.innerHTML ='' 
        btn.disabled = true      
              
    }else{
        respErro.style.fontSize = '0.8rem'
        respErro.style.color = '#000'
        respErro.style.marginTop = '5px'
        respSucesso.innerHTML = ''
        respErro.innerHTML = '*Preencha todos os campos corretamente' 
    
        btn.disabled = true
        btn.style.cursor = 'no-drop'          
    }
}
function validarTermo(){

    btn.disabled = false;
    btn.style = 'background-color: #CA1C2A'
    btn.style.cursor = 'pointer'        
    }

const toastTrigger = document.getElementById('btn')
const toastLiveExample = document.getElementById('liveToast')

 if (toastTrigger) {
 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
 toastTrigger.addEventListener('click', () => {
   toastBootstrap.show()
 })
} 