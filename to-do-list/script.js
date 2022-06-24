
//solucao 1 - palindromocd 
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}
let myVar = null;
console.log(verificaPalindromo(myVar));

//solucao 2 
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("pop"))