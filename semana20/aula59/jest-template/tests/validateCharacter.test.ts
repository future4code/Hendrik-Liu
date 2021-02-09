import { validateCharacter } from "../src/validateCharacter"

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
});


test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
});


test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
});


test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
});


test("Should return false for life or strength or defense lower than 0", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: -100,
      defense: 500,
    });

    expect(result).toBe(false);
});


test("Should return false for all inputs", () => {
    const result = validateCharacter({
      name: "",
      life: 0,
      strength: 0,
      defense: 0,
    });

    expect(result).toBe(false);
});