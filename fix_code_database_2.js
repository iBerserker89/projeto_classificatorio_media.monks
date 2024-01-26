// Função 1.
// Utilizei um módulo fs do node.js para ler o arquivo no computador.
const FileSystem = require('fs');
// Usei a interface do node.js para ler e retornar o conteúdo do arquivo json na variável dados_2.
const dados_2 = FileSystem.readFileSync('./broken_database_2.json', 'utf-8');
// JSON.parse para transforma o arquivo .json em objeto .js, na variável obj_2.
let obj_2 = JSON.parse(dados_2);

// Função 2.
// Utilizei um loop for...in, que varre todas os elementos em obj_2.
for (let key in obj_2) {
    // ReplaceAll substitui todos os 'ø' por 'o' e 'æ' por 'a', dentro de 'marca'.
    obj_2[key].marca = obj_2[key].marca.replaceAll('ø', 'o').replaceAll('æ', 'a')
};

// Função 3.
// JSON.stringify faz o oposto do método .parse, transforma o objeto .js em uma arquivo .json.
let fixed_database_2 = JSON.stringify(obj_2);

// Função 4.
// WriteFile, do node.js, exporta o arquivo fixed_database_2.json para uma pasta local no computador.
FileSystem.writeFile(
    'fixed_database_2.json', 
    fixed_database_2,
    (Error) => {if (Error) throw Error;
});
