import Conta from "./Conta.js";

export default class ContaEstudante extends Conta
{
    constructor(id,cpf,nome,conta)
    {
    super(id,cpf,nome,conta)
    this._tipoConta = "E";
    this._extratosQuantidade = 1;
    this._trasferencia = 1;
    this._limitedesaque = 300;
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
    efetSD(tipotrans,valor,objExtrato){
        
        if(tipotrans == "Saque")
        {
            if ((valor<=this.saldo)) {
                if(this._limitedesaque>=(valor))
                {
                this.saldo = this.saldo - parseInt(valor)
                this.extrato.push(objExtrato)
                this._limitedesaque = this._limitedesaque - parseInt(valor)
                }
                else
                {
                    alert("Está operação excede seu limite de saque, será cobrado 0.50 centavos para esta")
                    this.saldo = this.saldo - parseInt(valor)
                    this.extrato.push(objExtrato)
                    this._limitedesaque = this._limitedesaque - parseInt(valor)
                    this.saldo = this.saldo - 0.50
                    let valor = 0.50
                    let tipo = "Taxa"
                    let conta = "-"
                    let objstaxa = {valor,conta,tipo}
                    
                   
                    this.extrato.push(objstaxa)
                }
            }
            else
            {
                alert("Voce nao tem este valor para sacar")
            }
            
        }
        else
        {
            this.saldo = this.saldo + parseInt(valor)
            this.extrato.push(objExtrato)
        }
    }
    gerarExtrato() {
        if (this._extratosQuantidade > 0) {
        this._extratosQuantidade = this._extratosQuantidade - 1
        document.getElementById("listaExtrato").innerHTML = ''
        let lista = document.getElementById("listaExtrato").innerHTML;
        lista += `<p>Conta: ${this.conta}</p>`
        lista += `<p>Saldo: $${this._saldo}</p>`
        lista += `<p>Extratos: ${this._extratosQuantidade}</p>`
        lista += `<p>Transferencias: ${this._trasferencia}</p>`
        lista += `<p>Limite de saque: ${this._limitedesaque}</p>`
        lista += `<p>VALOR    CONTA    TIPO</p>`
        for (let index = 0; index < this.extrato.length; index++) {
            lista += `<p class="linha">  ${this.extrato[index].valor} &nbsp;&nbsp;${this.extrato[index].conta} &nbsp;&nbsp;${this.extrato[index].tipo}&nbsp;&nbsp; </p>`;
         }
         document.getElementById("listaExtrato").innerHTML = lista;
        }
        else
        {
            alert("Operacao excede o valor limite de saque, será cobrado 0.50 centavos para esta")
            this.saldo = this.saldo - 0.50
            let valor = 0.50
            let tipo = "Taxa"
            let conta = "-"
            let objstaxa = {valor,conta,tipo}
            this.extrato.push(objstaxa)

        }
    
    }
    passarMes(){
        this._extratosQuantidade = 1;
        this._trasferencia = 1;
        this._limitedesaque = 300; 
    }
    
}