### EXERCICIO 1
*a. Explique o que é uma chave estrangeira*
Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas.

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
```
INSERT INTO Rating VALUES ("002", "Muito bom", 6, "001");
INSERT INTO Rating VALUES ("002", "Ótimo", 9, "002");
INSERT INTO Rating VALUES ("003", "Excelente", 9.5, "003");
```
*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
O banco retorna com erro na Foreign Key.

d. *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
```
ALTER TABLE Movie DROP COLUMN rating;
```

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
O banco retorna com erro na Foreign Key.

### EXERCICIO 2
*a. Explique, com as suas palavras, essa tabela*
Essa tabela faz o relacionamento entre as tabelas Movie e Actor.

*b. Crie, ao menos, 6 relações nessa tabela* 
```
INSERT INTO MovieCast VALUES ("001", "001")
INSERT INTO MovieCast VALUES ("001", "002")
INSERT INTO MovieCast VALUES ("002", "004")
INSERT INTO MovieCast VALUES ("003", "005")
INSERT INTO MovieCast VALUES ("003", "006")
INSERT INTO MovieCast VALUES ("004", "001")
```

*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
O banco retorna com um erro dizendo que há falha na Foreign Key.

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira.

### EXERCICIO 3
*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
Mostra todas as informações da tabela Movie e relaciona com a tabela Rating de acordo com o seu id trazendo todas as suas informações também.

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
```
SELECT Movie.id, Movie.title, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id
WHERE Rating.rate IS NOT NULL;
```

### EXERCICIO 4
*a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
```
SELECT Movie.id, Movie.title, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
```
SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.Movie_id = Movie.id
```

*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*