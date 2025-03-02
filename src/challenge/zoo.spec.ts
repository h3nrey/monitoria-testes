
import { Zoo, Animal } from './zoo';

describe("Zoo", () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test("should add an animal to the zoo", () => {
    const lion = new Animal("Simba", "Lion", 5);
    zoo.addAnimal(lion);
    expect(zoo.getAllAnimals()).toContain(lion);
  });

  test("should remove an animal by name", () => {
    const lion = new Animal("Simba", "Lion", 5);
    zoo.addAnimal(lion);
    zoo.removeAnimal("Simba");
    expect(zoo.getAllAnimals()).not.toContain(lion);
  });


});
