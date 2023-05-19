document.querySelector("form").addEventListener("submit", (e)=>{
  e.preventDefault()
  openSuces()
  let campos = [...document.querySelectorAll(".required")]

  for(let i in campos){
    campos[i].disabled = "true"
  }
  //tira o comportamento padrão do form, reload da pagina após click do btn submit
})

document.getElementById('dataNascimento').addEventListener("blur", validateAgeFunction)//chama a função validadeAgeFunction após o usuario sair campo dataNascimento
let responsavel = document.getElementById("responsavel")
responsavel.addEventListener("input", removeAlert)

const errorMessage = document.querySelector(".error-message")
const sucesMessage = document.querySelector(".suces-message")

function removeAlert(){
  errorMessage.style.display = "none";
}
function openSuces(){
  sucesMessage.style.display = "flex";
  setInterval(()=>{
    window.location.reload()
  }, 5000)
}

const messageError = (message) => {
  errorMessage.innerHTML = message;
  errorMessage.style.display = "flex";
};

function validateAge(e){
  let ano = parseInt(e.value.substr(0,4)); 
  //converte tipo string para int e retorna somente o ano

  let calc = 2022 - ano;

  if(calc < 18){  
    errorMessage.style.display = "flex";
    responsavel.disabled = false
    return calc
  }
  else{
    errorMessage.style.display = "none";
  }
}

// função que da start no código
function validateAgeFunction(){
  const age = document.getElementById('dataNascimento');
  const validateAgen = validateAge(age)  //chama a função validateAge e retorna o valor processado na função e salva na variavel validateAgen
  
  // if (validateAgen < 18) { //eu tiraria isso e deixaria o texto já pré-definido no HTML
  //   messageError("PREENCHA O NOME DO RESPONSÁVEL (MENOR DE 18 ANOS)");
  // }
  
}

// let ano = parseInt(data.value.substr(6,4))