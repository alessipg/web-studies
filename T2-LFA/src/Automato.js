class Automato {
    constructor(V, T, P, S) {
        this.sigma = T;
        this.states = V;
        this.initialState = S;
        this.finalStates = []; // To store final states
        this.transitions = this.createTransitionFunction(P);
    }

    createTransitionFunction(P) {
        let transitions = {};

        P.forEach(rule => {
            let [state, ...productions] = rule;
            productions.forEach(production => {
                let [symbol, nextState] = this.parseProduction(production);
                if (!transitions[state]) {
                    transitions[state] = {};
                }
                if (!transitions[state][symbol]) {
                    transitions[state][symbol] = [];
                }
                transitions[state][symbol].push(nextState);
                if (nextState === "eps") {
                    this.finalStates.push(state);
                }
            });
        });

        return transitions;
    }

    parseProduction(production) {
        if (production === "eps") {
            return ["eps", "qf"]; // 'eps' transitions to a final state 'qf'
        }
        let symbol = production[0];
        let nextState = production.slice(1);
        return [symbol, nextState];
    }

    delta(state, symbol) {
        return this.transitions[state] ? this.transitions[state][symbol] || [] : [];
    }
}

let V = ["S", "A", "B"];
let T = ["a", "b"];
let P = [
    ["S", "aAB"],
    ["A", "bB", "eps"],
    ["B", "aA"]
];
let S = "S";

let aut = new Automato(V, T, P, S);

// Example usage
console.log(aut.transitions);
console.log(aut.delta("S", "a")); // Should return ["A"]
console.log(aut.delta("A", "b")); // Should return ["B"]
console.log(aut.delta("A", "eps")); // Should return ["qf"]
