### EXERCICIO 1
*a) Exclui a coluna salary da tabela Actor
```
ALTER TABLE Actor DROP COLUMN salary;
```

*b) Na tabela Actor, altera o nome da coluna gender para sex do tipo VARCHAR(6)  
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

*c) Na tabela Actor, altera o tipo da coluna gender para VARCHAR(255)
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

*d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### EXERCICIO 2
*a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`
```
UPDATE Actor
SET name = "Caio Castro", birth_date = "1990-10-25" 
WHERE id = "004";
```

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.
```
UPDATE Actor
SET name = "JULIANA PÃES" 
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE id = "005";
```

*c. Escreva uma query que atualize todas as informações do ator com o id `005`*
```
UPDATE Actor
SET 
name = "Mariana Rui Barbosa", 
salary = 1000000, 
birth_date = "2000-10-10", 
gender = "female"
WHERE id = "005";
```

*d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
```
UPDATE Actor SET salary = 1000000 WHERE id = "999"	
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.016 sec
```
O banco retorna como tivesse concluído a operação, mas nenhuma linha é alterada.

### EXERCICIO 3
*a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
*b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*
```
DELETE FROM Actor
WHERE gender = 'male' AND salary > 1000000;
```

### EXERCICIO 4
*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
```
SELECT MAX(salary) FROM Actor;
```

*b. Escreva uma query que pegue o menor salário das atrizes*
```
SELECT MIN(salary) FROM Actor WHERE gender = 'female';
```

*c. Escreva uma query que pegue a quantidade de atrizes*
```
SELECT COUNT(*) FROM Actor WHERE gender = 'female';
```

*d. Escreva uma query que pegue a soma de todos os salários*
```
SELECT SUM(salary) FROM Actor;
```

### EXERCICIO 5
*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
O banco retorna o número de linhas da tabela Actor agrupados de acordo com o gênero.

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
```
SELECT * FROM Actor ORDER BY salary ASC;
```

*d. Faça uma query que retorne os atores com os três maiores salarios*
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

*e. Faça uma query que retorne a média de salário por gênero*
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### EXERCICIO 6
*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
```
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```

*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
```
UPDATE Movie
SET playing_limit_date = '2007-03-06'
WHERE id = '001';

UPDATE Movie
SET playing_limit_date = '2022-01-01'
WHERE id = '002';
```

*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
```
DELETE FROM Movie WHERE id = "003";
```
O banco retorna que a query foi realizada, mas nenhuma das linhas foram afetadas.

### EXERCICIO 7
*a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

*b. Qual a média das avaliações dos filmes?*
```
SELECT AVG(rating) FROM Movie;
```

*c. Qual a quantidade de filmes em cartaz?*
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

*d. Qual a quantidade de filmes que ainda irão lançar?*
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

*e. Qual a maior nota dos filmes?*
```
SELECT MAX(rating) FROM Movie;
```

*f. Qual a menor nota dos filmes?*
```
SELECT MIN(rating) FROM Movie;
```

### EXERCICIO 8
*a. Retorne todos os filmes em ordem alfabética*
```
SELECT * FROM Movie ORDER BY title;
```

*b. Retorne os 5 primerios filmes em ordem descrente alfabética* 
```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

*c. Retorne os 3 filmes mais recentes em cartaz*
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

*d. Retorne os 3 filmes melhor avalidos*
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3
```









