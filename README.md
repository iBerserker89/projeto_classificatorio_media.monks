# Projeto Classificatorio Media.Monks

Este é um projeto de tratamento e análise de dados, para uma vaga de estágio em Web analytics na Media.Monks.

Este projeto consiste no tratamento e formatação de dados contidos em arquivos.json, utilizando as linguagens Javascrip e SQL.
Também foram utilizados gráficos e tabelas na criação do relatório prospoto para o projeto.

## Abaixo se encontram os passos seguidos para a entrega do projeto e links para o relatório e instruções do uso de código, em pdf:

1. Escrever uma função para abrir e ler os arquivos broken_database_1 e broken_data_base_2, utilizando Javascript.
2. Escrever uma função para corrigir e transformar os “ø” em “o” e os “æ” em “a”, nos arquivos json.
3. Escrever uma função para transformar strings em number, no campo “vendas” dos arquivos json.
4. Escrever uma função para transformar o objeto js novamente em um arquivo json e exportar esses arquivos para uma pasta local no computador.
5. Importar os dois arquivos json corrigidos para SQL ONLINE .
6. Criar uma tabela única utilizando SQL.
7. Exportar a tabela SQL como um arquivo .CSV.
8. Utilizar o Excel para criar tabelas e gráficos com o arquivo .CSV.
9. Elaborar o relatório, utilizando texto, tabelas e gráficos.
10. Importar e organizar todos os arquivos em um repositório do meu Github.

#### [Relatório de Vendas de Veículos](https://github.com/iBerserker89/projeto_classificatorio_media.monks/blob/main/Relat%C3%B3rio%20de%20Vendas%20de%20Ve%C3%ADculos.pdf) 
#### [Documentação do Trabalho Realizado](https://github.com/iBerserker89/projeto_classificatorio_media.monks/blob/main/Documenta%C3%A7%C3%A3o%20do%20trabalho%20realizado.pdf)

## Tabela SQL:

Para a criação do arquivo database_SQL foi necessário seguir os seguintes passos:

1. Importar os arquivos fixed_database_1 e fixed_database_2 para [SQL.ONLINE](https://sqliteonline.com/).
2. Renomear as colunas c1-c5 do arquivo fixed_database_1 para: DATA, ID_MARCA, VENDAS, VALOR_DO_VEICULO e NOME, respectivamente.
3. Renomear as colunas c1 e c2 do arquivo fixed_database_2 para: ID_MARCA e MARCA, respectivamente.
4. Feitos esses passos, basta rodar o código contido em [database_sql](https://github.com/iBerserker89/projeto_classificatorio_media.monks/blob/main/database_SQL.sql).
