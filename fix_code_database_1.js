// Função 1.
// Usei um módulo fs do node.js para ler o arquivo no computador.
const FileSystem = require('fs');
// Usei a interface do node.js para ler e retornar o conteúdo do arquivo json na variável dados.
const dados = FileSystem.readFileSync('./broken_database_1.json', 'utf-8');
// JSON.parse para transforma o arquivo .json em objeto .js, na variável obj.
let obj = JSON.parse(dados);

// Função 2.
// Utilizei um loop for...in, que varre todas os elementos em obj.
for (let key in obj) {
    // ParseInt transforma todos os elementos de 'vendas' em inteiro.
    obj[key].vendas = parseInt(obj[key].vendas)
    // ReplaceAll substitui todos os 'ø' por 'o' e 'æ' por 'a', dentro de 'nome'.
    obj[key].nome = obj[key].nome.replaceAll('ø', 'o').replaceAll('æ', 'a');
}

//Função 3.
// JSON.stringify faz o oposto do método .parse. Transforma o objeto .js em uma arquivo .json.
let fixed_database_1 = JSON.stringify(obj);

// Função 4.
// WriteFile, do node.js, exporta o arquivo fixed_database_1.json para uma pasta local no computador.
FileSystem.writeFile(
    'fixed_database_1.json', 
    fixed_database_1,
    (Error) => {if (Error) throw Error;}
);
