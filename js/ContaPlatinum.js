import Conta from "./Conta.js";

export default class ContaPlatinum extends Conta
{
    constructor(id,cpf,nome,conta)
    {
    super(id,cpf,nome,conta)
    this._tipoConta = "P";
    }
    efetSD(tipotrans,valor,objExtrato){
        
        if(tipotrans == "Saque")
        {
            if((valor<=this.saldo))
            {
                this.saldo = this.saldo - parseInt(valor)
                this.extrato.push(objExtrato)
            }
            alert("Operacao excede o valor limite de saque")
        }
        else
        {
            this.saldo = this.saldo + parseInt(valor)
            this.extrato.push(objExtrato)
        }
    }
    transferir(conta2,valor,objExtrato){
        if(this._trasferencia > 0)
        {
            if(this.saldo >= valor)
            {
                this.transferencia = this.transferencia - 1;
                this.saldo = this.saldo - valor;
                conta2.saldo = parseInt(conta2.saldo + valor);
                this.extrato.push(objExtrato)

            }
            else
            {
                alert("Saldo em conta nao suficiente")
            }

        }
        else
        {
            alert("Quantidade de transferecias mensais terminadas")
        }
    }
    gerarExtrato() {
        
        document.getElementById("listaExtrato").innerHTML = ''
        let lista = document.getElementById("listaExtrato").innerHTML;
        lista += `<p>Conta: ${this.conta}</p>`
        lista += `<p>Saldo: $${this._saldo}</p>`
        lista += `<p>Extratos: ILIMITADO</p>`
        lista += `<p>Transferencias: ILIMITADO</p>`
        lista += `<p>Limite de saque: ILIMITADO</p>`
        lista += `<p>VALOR    CONTA    TIPO</p>`
        for (let index = 0; index < this.extrato.length; index++) {
            lista += `<p class="linha">  ${this.extrato[index].valor} &nbsp;&nbsp;${this.extrato[index].conta} &nbsp;&nbsp;${this.extrato[index].tipo}&nbsp;&nbsp; </p>`;
         }
         document.getElementById("listaExtrato").innerHTML = lista;
       
    
    }
    passarMes(){
        alert("Essa conta nao tem possibilidade de passar o mes")
    }
    
}