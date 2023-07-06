 
 
/*===========VARIAVEIS===============*/

 let carro = "Ferrari";
 console.log(carro);

 let preco = 19.90;
 console.log(preco);

 let cidade = "São Paulo";
 console.log(cidade);

 console.log("O Carro é uma " + carro + "\nO Valor do bolo é " + preco + "\nE a cidade é " + cidade);
 console.log("=========================");
/*===================FIM==================*/




/*=============TEMPLATE STRING===============*/
let x = 0;

x = x + 1;

console.log(x);

let nome = "João";
let sobrenome = "Andrade";

// Template String
let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);
console.log("=========================");
/*======================FIM=====================*/

/*==================CONDICIONAIS IF ELSE===============*/

let idade = 45;

if (idade>=18 && idade<60){
  console.log("Você é um ADULTO");
  
}else if(idade<18){
  console.log("Você é uma CRIANÇA");
}else{
    console.log("Você é um IDOSO")
}

console.log("=========================");
/*=====================FIM==============================*/


/*===========CONDICIONAL TERNÁRIO===================== */

let isMember = false;

let shipping = isMember ? 2: 10;

console.log(isMember ? "Você é membro " :"Voce Não é membro");
console.log("Frete: " + shipping); 
console.log("=========================");
/*======================FIM============================*/


/*====================SWITCH CASE============= */

    let profession = "fiscal";

    switch(profession){
        case 'fiscal':
            console.log("Sua camisa será VERDE");
            break;
        case 'bombeiro':
            console.log("Sua camisa será VERMELHA");
            break;
        case 'policial':
            console.log("Sua camisa será AZUL");
            break;
        default:
            console.log("Sua camisa será PRETA");
            break


    }


/*========================FIM================== */

