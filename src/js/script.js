 // LIMPEZA E VALIDAÇÃO

const email=" email@email.com";
//trim remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

//TRANSFORMAÇÃO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";

//metodo upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)

//split transforma em array, se nao der espaço a frase vai ser contada letra por letra como array, com espaço sera palavra por palavra
const texto2 =tituloArtigo.split(" ");
console.log(texto2)

//join-junta tudo em uma unica string
const text3 = texto2.join("-");
console.log(text3)

//metodo toFixed
const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal=precoProduto *(1-desconto);
console.log(precoFinal);

// ``- template strings - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


// DOM (DOCUMENT OBJECT MODEL)

const Titulo=document.getElementById("titulo")

Titulo.innerText= "O DOM Mudou o Texto";

Titulo.style.color="blue";

/*CRIANDO O APP*/
const produtos =[
    {nome : "Teclado Mecânico",preco:300,emPromocao:true},
    {nome : "Mouse Gamer",preco:150,emPromocao:false},
    {nome : "Monitor Gamer",preco:1300,emPromocao:true},
    {nome : "Pad Mouse XL",preco:400,emPromocao:false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal =document.getElementById("resultado-total");

//Map: trsnforma o array de objetos em um array de strings html e css

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos =lista.map(item => `
        <div class="card">
        <h3>${item.nome}</h3>
        <p>Preço: R$ ${item.preco}</p>
        ${item.emPromocao ? '<span class="tag">Promocao</span>':''}
        </div>
        `).join('');//trsnforma o array em uma única string

        container.innerHTML=htmlProdutos;
}

//FILTER- Cria uma nova lista apenas com o que escolheu

function filtrarPromocoes(produtos){
    const promocionais= produtos.filter(item =>item.emPromocao);
    todosProdutos(promocionais);
}
//REDUCE- Reduz o array a um unico valor(soma o preços)

function calcularTotal(produtos){
    const total =produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor Total R$ ${total}`;

}