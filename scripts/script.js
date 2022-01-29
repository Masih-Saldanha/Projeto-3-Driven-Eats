// VARIÁVEIS PARA MANIPULAÇÃO
// VARIÁVEIS DE SELEÇÃO DE PRATO
let escolherPizzaSinal = document.querySelector(".pizza-sinal-verde");
let escolherPizzaBorda = document.querySelector(".menu-opcao-pizza");
let escolherLasanhaSinal = document.querySelector(".lasanha-sinal-verde");
let escolherLasanhaBorda = document.querySelector(".menu-opcao-lasanha");
let escolherSushiSinal = document.querySelector(".sushi-sinal-verde");
let escolherSushiBorda = document.querySelector(".menu-opcao-sushi");
// VARIÁVEIS DE SELEÇÃO DE BEBIDA
let escolherRefrigeranteSinal = document.querySelector(".refrigerante-sinal-verde");
let escolherRefrigeranteBorda = document.querySelector(".menu-opcao-refrigerante");
let escolherSucoSinal = document.querySelector(".suco-sinal-verde");
let escolherSucoBorda = document.querySelector(".menu-opcao-suco");
let escolherCocoSinal = document.querySelector(".coco-sinal-verde");
let escolherCocoBorda = document.querySelector(".menu-opcao-coco");
// VARIÁVEIS DE SELEÇÃO DE SOBREMESA
let escolherBoloSinal = document.querySelector(".bolo-sinal-verde");
let escolherBoloBorda = document.querySelector(".menu-opcao-bolo");
let escolherSorveteSinal = document.querySelector(".sorvete-sinal-verde");
let escolherSorveteBorda = document.querySelector(".menu-opcao-sorvete");
let escolherPudimSinal = document.querySelector(".pudim-sinal-verde");
let escolherPudimBorda = document.querySelector(".menu-opcao-pudim");
// VARIÁVEIS DE PRECO
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let precoTotal = precoPrato+precoBebida+precoSobremesa;

let botaoVerde = document.querySelector(".barra-baixo-botao");
// VARIÁVEIS DE CHECAGEM PARA HABILITAÇÃO DO BOTÃO VERDE
let pedidoFeitoPrato = 0;
let pedidoFeitoBebida = 0;
let pedidoFeitoSobremesa = 0;

let pedidoFeito = pedidoFeitoPrato+pedidoFeitoBebida+pedidoFeitoSobremesa;
// VARIÁVEIS DE NOMES DOS PEDIDOS
let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";

let mensagemZap = "";
// FUNÇÃO QUE VERIFICA E LIBERA O BOTÃO VERDE DE BAIXO
function habilitarPedido() {
    pedidoFeito = pedidoFeitoPrato+pedidoFeitoBebida+pedidoFeitoSobremesa;
    if (pedidoFeito === 3) {
        botaoVerde.classList.remove("barra-baixo-botao-verde");
        botaoVerde.innerHTML = "<h2>Fechar pedido</h2>"
    }
}

// FUNÇÕES DE SELEÇÃO DE ITENS
// SELEÇÃO DE PRATO
function selecionarPizza() {
    escolherPizzaSinal.classList.remove("pizza-sinal-verde-escondido");
    escolherPizzaBorda.classList.remove("menu-opcao-pizza-escondido");
    escolherLasanhaSinal.classList.add("lasanha-sinal-verde-escondido");
    escolherLasanhaBorda.classList.add("menu-opcao-lasanha-escondido");
    escolherSushiSinal.classList.add("sushi-sinal-verde-escondido");
    escolherSushiBorda.classList.add("menu-opcao-sushi-escondido");
    precoPrato = 20;
    nomePrato = "Pizza de Capituri";
    pedidoFeitoPrato = 1;
    habilitarPedido();
}
function selecionarLasanha() {
    escolherPizzaSinal.classList.add("pizza-sinal-verde-escondido");
    escolherPizzaBorda.classList.add("menu-opcao-pizza-escondido");
    escolherLasanhaSinal.classList.remove("lasanha-sinal-verde-escondido");
    escolherLasanhaBorda.classList.remove("menu-opcao-lasanha-escondido");
    escolherSushiSinal.classList.add("sushi-sinal-verde-escondido");
    escolherSushiBorda.classList.add("menu-opcao-sushi-escondido");
    precoPrato = 15;
    nomePrato = "Lasanha de Frango";
    pedidoFeitoPrato = 1;
    habilitarPedido();
}
function selecionarSushi() {
    escolherPizzaSinal.classList.add("pizza-sinal-verde-escondido");
    escolherPizzaBorda.classList.add("menu-opcao-pizza-escondido");
    escolherLasanhaSinal.classList.add("lasanha-sinal-verde-escondido");
    escolherLasanhaBorda.classList.add("menu-opcao-lasanha-escondido");
    escolherSushiSinal.classList.remove("sushi-sinal-verde-escondido");
    escolherSushiBorda.classList.remove("menu-opcao-sushi-escondido");
    precoPrato = 25;
    nomePrato = "Barca de Sushi";
    pedidoFeitoPrato = 1;
    habilitarPedido();
}

// SELEÇÃO DE BEBIDA
function selecionarRefrigerante() {
    escolherRefrigeranteSinal.classList.remove("refrigerante-sinal-verde-escondido");
    escolherRefrigeranteBorda.classList.remove("menu-opcao-refrigerante-escondido");
    escolherSucoSinal.classList.add("suco-sinal-verde-escondido");
    escolherSucoBorda.classList.add("menu-opcao-suco-escondido");
    escolherCocoSinal.classList.add("coco-sinal-verde-escondido");
    escolherCocoBorda.classList.add("menu-opcao-coco-escondido");
    precoBebida = 6;
    nomeBebida = "Lata de Refrigerante";
    pedidoFeitoBebida = 1;
    habilitarPedido();
}
function selecionarSuco() {
    escolherRefrigeranteSinal.classList.add("refrigerante-sinal-verde-escondido");
    escolherRefrigeranteBorda.classList.add("menu-opcao-refrigerante-escondido");
    escolherSucoSinal.classList.remove("suco-sinal-verde-escondido");
    escolherSucoBorda.classList.remove("menu-opcao-suco-escondido");
    escolherCocoSinal.classList.add("coco-sinal-verde-escondido");
    escolherCocoBorda.classList.add("menu-opcao-coco-escondido");
    precoBebida = 7;
    nomeBebida = "Suquinho de Laranja";
    pedidoFeitoBebida = 1;
    habilitarPedido();
}
function selecionarCoco() {
    escolherRefrigeranteSinal.classList.add("refrigerante-sinal-verde-escondido");
    escolherRefrigeranteBorda.classList.add("menu-opcao-refrigerante-escondido");
    escolherSucoSinal.classList.add("suco-sinal-verde-escondido");
    escolherSucoBorda.classList.add("menu-opcao-suco-escondido");
    escolherCocoSinal.classList.remove("coco-sinal-verde-escondido");
    escolherCocoBorda.classList.remove("menu-opcao-coco-escondido");
    precoBebida = 8;
    nomeBebida = "Água de Coco";
    pedidoFeitoBebida = 1;
    habilitarPedido();
}

// SELEÇÃO DE SOBREMESA
function selecionarBolo() {
    escolherBoloSinal.classList.remove("bolo-sinal-verde-escondido");
    escolherBoloBorda.classList.remove("menu-opcao-bolo-escondido");
    escolherSorveteSinal.classList.add("sorvete-sinal-verde-escondido");
    escolherSorveteBorda.classList.add("menu-opcao-sorvete-escondido");
    escolherPudimSinal.classList.add("pudim-sinal-verde-escondido");
    escolherPudimBorda.classList.add("menu-opcao-pudim-escondido");
    precoSobremesa = 11;
    nomeSobremesa = "Bolo de Cenoura";
    pedidoFeitoSobremesa = 1;
    habilitarPedido();
}
function selecionarSorvete() {
    escolherBoloSinal.classList.add("bolo-sinal-verde-escondido");
    escolherBoloBorda.classList.add("menu-opcao-bolo-escondido");
    escolherSorveteSinal.classList.remove("sorvete-sinal-verde-escondido");
    escolherSorveteBorda.classList.remove("menu-opcao-sorvete-escondido");
    escolherPudimSinal.classList.add("pudim-sinal-verde-escondido");
    escolherPudimBorda.classList.add("menu-opcao-pudim-escondido");
    precoSobremesa = 12;
    nomeSobremesa = "Sorvete";
    pedidoFeitoSobremesa = 1;
    habilitarPedido();
}
function selecionarPudim() {
    escolherBoloSinal.classList.add("bolo-sinal-verde-escondido");
    escolherBoloBorda.classList.add("menu-opcao-bolo-escondido");
    escolherSorveteSinal.classList.add("sorvete-sinal-verde-escondido");
    escolherSorveteBorda.classList.add("menu-opcao-sorvete-escondido");
    escolherPudimSinal.classList.remove("pudim-sinal-verde-escondido");
    escolherPudimBorda.classList.remove("menu-opcao-pudim-escondido");
    precoSobremesa = 13;
    nomeSobremesa = "Pudim";
    pedidoFeitoSobremesa = 1;
    habilitarPedido();
}

// APERTAR BOTÃO VERDE
function fecharPedido() {
    precoTotal = precoPrato + precoBebida + precoSobremesa;
    mensagemZap = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomePrato}\n-Bebida: ${nomeBebida}\n-Sobremesa: ${nomeSobremesa}\nTotal: R$ ${precoTotal.toFixed(2)}`;
    if (pedidoFeito === 3) {
        window.open(`https://wa.me/5593991970827?text=${encodeURIComponent(mensagemZap)}`);
    }
}