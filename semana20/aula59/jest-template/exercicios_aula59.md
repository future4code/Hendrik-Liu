### EXERCICIO 1
*a. Crie uma interface para representar os personagens*
`
export interface Character {
    name: string
    life: number
    strength: number
    defense: number
}
`

*b. Crie uma função validateCharacter que valide as informações de um personagem (devolvendo true se for válida ou false caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*
`
export const validateCharacter = (input:Character):boolean => {
    
    if(!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined){
        return false
    }

    if(input.life <= 0 || input.strength <= 0|| input.defense <= 0){
        return false
    }

    return true

}
`

### EXERCICIO 2
*a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".* 
`
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
});
`

*b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.* 
`
test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
});
`

*c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.* 
`
test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
});
`

*d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.* 
`
test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
});
`

*e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo*
`
test("Should return false for life or strength or defense lower than 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: -100,
      defense: 500,
    });

    expect(result).toBe(false);
});
`

*f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas*
`
test("Should return false for all inputs", () => {
    const result = validateCharacter({
      name: "",
      life: 0,
      strength: 0,
      defense: 0,
    });

    expect(result).toBe(false);
});
`
### EXERCICIO 3
*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*
`
export const performAttack = (attacker: Character, defender: Character) => {
    
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
    
  };
`

*b. Implemente a função utilizando inversão de dependências*
`
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };
`

*c. Explique, com as suas palavras, as diferenças entre as duas implementações*
Na primeira implementação a função é obrigada a checar se todas as informações da função validateCharacter são válidas.
E na segunda implementação, você mesmo pode manipular as validações da função da maneira que você quiser.

### EXERCICIO 4
*a. De qual das duas funções (`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.*
performAttack

*b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento*
`
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
`

*c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento*
`
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
`

### EXERCICIO 5
*a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.*
`
test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  `

*b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou.*
`
test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
`
