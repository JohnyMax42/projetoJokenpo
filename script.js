const opcoes = {
   1: {nome: 'pedra', img:'img/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU'},
   2: {nome: 'papel', img:'img/papel.png', pedra: 'GANHOU', papel: 'EMPATE', tesoura: 'PERDEU'},
   3: {nome: 'tesoura', img:'img/tesoura.png', pedra: 'PERDEU', papel: 'GANHOU', tesoura: 'EMPATE'}
}

//seleção dos objetos do document
//imagem e texto da escolha do usuario
let imgJogador = document.querySelector('#imgUser')
let pJogador = document.querySelector('#escolhaUsuario')

//imagem e texto da escolh do computador
let imgComputador = document.querySelector('#imgComput')
let pComputador = document.querySelector('#escolhaComputador')

//resultado final
let resultadoFinal = document.querySelector('#resultado')

//contagem pontos no document
let contagemPontosJogador = document.querySelector('#pontosUsuario')
let contagemPontosComputador = document.querySelector('#pontosComputador')

//botões jogada usuario
let btnPedra = document.getElementsByTagName('button')[0]
let btnPapel = document.getElementsByTagName('button')[1]
let btnTesoura = document.getElementsByTagName('button')[2]

//variaveis globais para escolha do usuario e do computador
let escolhaJogador={}
let escolhaComputador={}

//variaveis globais para pontuação
let pontosJogador = 0
let pontosComputador = 0

function escolherJogada(num){
   return opcoes[num]
}

function montarJogadas(numJogador){
   let numComp = Math.floor((Math.random()*3)+1)
   escolhaJogador = escolherJogada(numJogador)
   escolhaComputador = escolherJogada(numComp)
}

function avaliarGanhador(){
   if(escolhaJogador[escolhaComputador.nome]=='GANHOU'){
      pontosJogador += 1
   }
   else if(escolhaJogador[escolhaComputador.nome]=='PERDEU'){
      pontosComputador += 1
   }
}

function montarTela(){
   imgJogador.src=escolhaJogador.img
   imgComputador.src=escolhaComputador.img

   imgJogador.alt=escolhaJogador.nome
   imgComputador.alt=escolhaComputador.nome

   pJogador.innerHTML='Jogador'//`Você escolheu ${escolhaJogador.nome}`
   pComputador.innerHTML='Computador'//`Computador escolheu ${escolhaComputador.nome}`

   contagemPontosJogador.innerHTML=pontosJogador
   contagemPontosComputador.innerHTML=pontosComputador

   resultadoFinal.innerHTML=escolhaJogador[escolhaComputador.nome]

   //adição da classe para maniulação do style
   switch (escolhaJogador[escolhaComputador.nome]) {
      case 'GANHOU':
            resultadoFinal.classList='ganhou'
         break;
      case 'PERDEU':
            resultadoFinal.classList='perdeu'
            break;
      default:
            resultadoFinal.classList='empatou'
         break;
   }
}

function jogar(num){
   montarJogadas(num)
   avaliarGanhador()
   montarTela()
}

// for (let i = 1; i < 10; i++) {
//    let jogadas = i;
//    setTimeout(() => {
//      jogar(Math.floor((Math.random()*3)+1))
//    }, i*2000);
// }

//adição do escutadores de eventos aos botões com evento click

btnPedra.addEventListener('click', ()=> jogar(1))
btnPapel.addEventListener('click', ()=> jogar(2))
btnTesoura.addEventListener('click', ()=> jogar(3))
