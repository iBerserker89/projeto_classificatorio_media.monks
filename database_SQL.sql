-- Select especifica quais colunas da tabela quero selecionar/modificar.
-- Utilizei o comando para substituir a segunda coluna da tabela e "AS 'VALOR'" para modificar o nome da última coluna.
SELECT fixed_database_1.DATA, fixed_database_2.MARCA, fixed_database_1.NOME, fixed_database_1.VENDAS,
fixed_database_1.VALOR_DO_VEICULO AS VALOR

-- FROM especifica qual tabela quero selecionar.
FROM fixed_database_1

-- INNER JOIN seleciona os registro com valores semelhantes em cada tabela especificada e permite "mesclar" essas informações.
INNER JOIN fixed_database_2 ON fixed_database_1.ID_MARCA=fixed_database_2.ID_MARCA