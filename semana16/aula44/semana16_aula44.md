USE `dumont-hendrik-liu`;

CREATE TABLE Actor (
	id 			VARCHAR(255) 	PRIMARY KEY,
    name 		VARCHAR(255) 	NOT NULL,
    salary 		FLOAT 			NOT NULL,
    birth_date 	DATE 			NOT NULL,
    gender 		VARCHAR(6) 		NOT NULL
);


### EXERCICIO 1
* a) 
VARCHAR(n): representa uma string de tamanho variável
DATE: representa uma data
PRIMARY KEY: representa a chave primária/identificador
NOT NULL: representa que o campo não pode ser nulo

* b) SHOW DATABASES: retorna o banco de dados 
SHOW TABLES: retorna as tabelas criadas

* c) SHOW Actor: retorna as colunas da tabela Actor


### EXERCICIO 2
* a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

* b) Entrada duplicada para a Primary Key "002". O erro aconteceu porque a Primary Key já existe e ela é única. 

* c) O número de columas não correspondem ao número de valores na linha 1.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);
```

* d) O campo "name" não possui um valor padrão.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Bruno Gagliasso",
  400000,
  "1949-04-18", 
  "male"
);
```

* e) Valor de data incorreta.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

* f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Bruna Marquezine",
  1000000,
  "1995-08-04", 
  "female"
),
(
  "007", 
  "Neymar Junior",
  10000000,
  "1992-02-05", 
  "male"
);
```
*/


### EXERCICIO 3
* a)
```
SELECT * 
FROM Actor
WHERE gender = "female";
```

* b)
```
SELECT name, salary
FROM Actor
WHERE name = "Tony Ramos";
```

* c)
```
SELECT *
FROM Actor
WHERE gender = "invalid"
```

* d)
```
SELECT id, name, salary
FROM Actor
WHERE salary <= 500000;
```

* e) 
-- Retornou coluna desconhecida "nome".
```
SELECT id, name 
FROM Actor 
WHERE id = "002"
```

### EXERCICIO 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
