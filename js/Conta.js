export default class Conta{
    constructor(id,cpf,nome,conta)
    {
        this._id = id;
        this._CPF = cpf;
        this._nome = nome;
        this._conta = conta;
        this._extrato = [];
        this.saldo = 0
        
    }
        
    get id()
    {
        return this._id;
    }
    get cpf()
    {
        return this._CPF;
    }
    get nome()
    {
        return this._nome;
    }
    get conta()
    {
        return this._conta;
    }
    get saldo()
    {
        return this._saldo;
    }
    set saldo(valor)
    {
        this._saldo = valor
    }
    get extrato()
    {
        return this._extrato
    }
    transferir(conta2,valor){
        

    }
    efetSD(tipotrans){
       
    }
    passarMes()
    {

    }
    gerarExtrato() {
        
    }
}