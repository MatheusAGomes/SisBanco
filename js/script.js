import Conta from "./Conta.js";
import ContaBasica from "./ContaBasica.js"
import ContaEstudante from "./ContaEstudante.js"
import ContaPlatinum from "./ContaPlatinum.js"

//inputs
const cadastrarBtn = document.getElementById('cadastrarBtn')
const TransferenciasBtn = document.getElementById('TransferenciasBtn')
const criarBtnCad = document.getElementById('criarBtnCad')
const inputNome = document.getElementById('inputNome')
const inputCPF = document.getElementById('inputCPF')
const TipoConta = document.getElementById('TipoConta')
const SaqueDepositoBtn = document.getElementById('SaqueDepositoBtn')
const dsConta = document.getElementById('dsConta')
const dsValor = document.getElementById('dsValor')
const TipoOP = document.getElementById('TipoOP')
const efetuarBtnDS = document.getElementById('efetuarBtnDS')
const voltarBtnCad = document.getElementById('voltarBtnCad')
const voltarBtnTrans = document.getElementById('voltarBtnTrans')
const voltarBtnDS = document.getElementById('voltarBtnDS')
const contaOrigem = document.getElementById('contaOrigem')
const contaDestino = document.getElementById('contaDestino')
const valorTransferido = document.getElementById('valorTransferido')
const EnviarBtnTrans = document.getElementById('EnviarBtnTrans')
const procuraExtrato = document.getElementById('procuraExtrato')
const extratoBtn = document.getElementById('extratoBtn')
const voltarBtnRel = document.getElementById('voltarBtnRel')
const ExtratosBtn = document.getElementById('ExtratosBtn')
const procurarBtn = document.getElementById('procurarBtn')

const resetarBtn = document.getElementById('resetarBtn')




//div
const divhome = document.getElementById('corpoHome')
const divcad = document.getElementById('corpoCad')
const divTransferencia = document.getElementById('corpoTransferencias')
const divcorpoSaqueDeposito = document.getElementById('corpoSaqueDeposito')
const corpoExtrato = document.getElementById('corpoExtrato')

const arrayConta=[];

resetarBtn.addEventListener('click',() => {
    resetarmes()

})
procurarBtn.addEventListener('click',() => {
    gerarExtrato()

})
EnviarBtnTrans.addEventListener('click',() => {
    efetuarTrans()    

})

voltarBtnDS.addEventListener('click',() => {
    showHome()    

})
ExtratosBtn.addEventListener('click',() => {
    showExtrato()    

})

voltarBtnRel.addEventListener('click',() => {
    showHome()    

})

voltarBtnTrans.addEventListener('click',() => {
    showHome()    

})
efetuarBtnDS.addEventListener('click',() => {
    efetuarDS()    

})
cadastrarBtn.addEventListener('click',() => {
    showcad()    

})
TransferenciasBtn.addEventListener('click',() => {
    showTrans()    

})
SaqueDepositoBtn.addEventListener('click',() => {
    showDS()    

})
criarBtnCad.addEventListener('click',() => {
    criarConta()    

})
voltarBtnCad.addEventListener('click',() => {
    showHome()    

})

function resetarmes() {
    arrayConta.forEach((element)=>{
        element.passarMes();
    })
}

function gerarExtrato() {
    let contaExtrato = verificarConta(procuraExtrato.value)
    
    
    if(contaExtrato)
    {
        contaExtrato.gerarExtrato()
    }
    else
    {
        alert("Conta nao encontrada")
    }
    
}

function GerarNumeroDaConta() {
   return Math.floor(Math.random() * 100 + 1)
}

function efetuarDS()
{
    let valor = dsValor.value
    let tipo = TipoOP.value
    let conta = "-"
    let objExtrato = {valor,conta,tipo}
    let contautilizada = verificarConta(dsConta.value)
    console.log(contautilizada)
    if (contautilizada) {
        contautilizada.efetSD(TipoOP.value,dsValor.value,objExtrato)
    }
    limpar()

    
}
function efetuarTrans() {
    let valor = valorTransferido.value
    let contaorigem = verificarConta(contaOrigem.value)
    let contadestino = verificarConta(contaDestino.value)
    console.log(contadestino)
    let conta = contadestino.conta
    let tipo = "Transferencia Enviada"
    let objExtrato = {valor,conta,tipo}
        if (contaorigem) {
        contaorigem.transferir(contadestino,valor,objExtrato)
    }
    tipo = "Transferencia Recebida"
    objExtrato = {valor,conta,tipo}
    contadestino.extrato.push(objExtrato)
    limpar()


    
}
function verificarConta(numeroDaConta){
     let found = arrayConta.find(element => element.conta == numeroDaConta)
     console.log(found)
     return found
    }
function criarConta()
{
 if (TipoConta.value == "ContaBasica") {
    let conta = new ContaBasica(arrayConta.length,inputCPF.value,inputNome.value,GerarNumeroDaConta())
    arrayConta.push(conta)
 alert(`Nova Conta criada. Numero da Conta:${conta.conta}`)

 }
 else
 {
    if(TipoConta.value == "ContaEstudante")
    {
        let conta = new ContaEstudante(arrayConta.length,inputCPF.value,inputNome.value,GerarNumeroDaConta())
        arrayConta.push(conta)
 alert(`Nova Conta criada. Numero da Conta:${conta.conta}`)

    }
    else
    {
        let conta = new ContaPlatinum(arrayConta.length,inputCPF.value,inputNome.value,GerarNumeroDaConta())
        arrayConta.push(conta)
 alert(`Nova Conta criada. Numero da Conta:${conta.conta}`)


    }


 }
 limpar()

}

function showExtrato() {
    document.getElementById("listaExtrato").innerHTML = ''
    divcad.style.display = "none";
    divhome.style.display = "none";
    divTransferencia.style.display = "none";
    divcorpoSaqueDeposito.style.display = "none"
    corpoExtrato.style.display = "flex";
}
function showDS(){
    divcad.style.display = "none";
    divhome.style.display = "none";
    divTransferencia.style.display = "none";
    divcorpoSaqueDeposito.style.display = "flex"
    corpoExtrato.style.display = "none";


}
function showcad(){
    divcad.style.display = "flex";
    divhome.style.display = "none";
    divTransferencia.style.display = "none";
    divcorpoSaqueDeposito.style.display = "none"
    corpoExtrato.style.display = "none";

}
function showHome(){
    divcad.style.display = "none";
    divhome.style.display = "flex";
    divTransferencia.style.display = "none";
    divcorpoSaqueDeposito.style.display = "none"
    corpoExtrato.style.display = "none";
    limpar()
}
function showTrans(){
    divcad.style.display = "none";
    divhome.style.display = "none";
    divTransferencia.style.display = "flex";
    divcorpoSaqueDeposito.style.display = "none"
    corpoExtrato.style.display = "none";

}
function limpar() {
    inputNome.value = ''
    inputCPF.value = ''
    dsConta.value = ''
    dsValor.value = ''
    contaOrigem.value = ''
    contaDestino.value = ''
    valorTransferido.value = ''
    procuraExtrato.value = ''
}