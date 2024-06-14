import Automato from "./Automato.js"


export class Gramatica{
    V = ["S","A","B"];
    T = ["a","b"];
    P = [
        ["S","aA"],
        ["A","bB","eps"],
        ["B","aA"]
    ]
    S = "S";

    gerarAutomato(){
        let automato = new Automato(this.V,this.T,this.P,this.S);
        return automato;
    }
}