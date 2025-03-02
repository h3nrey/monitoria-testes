
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

  test("should not remove an animal if name does not exist", () => {
    const tiger = new Animal("Shere Khan", "Tiger", 10);
    zoo.addAnimal(tiger);
    zoo.removeAnimal("Nonexistent");
    expect(zoo.getAllAnimals()).toContain(tiger);
  });

  test("should get an animal by name", () => {
    const elephant = new Animal("Dumbo", "Elephant", 3);
    zoo.addAnimal(elephant);
    expect(zoo.getAnimal("Dumbo")).toBe(elephant);
  });

  test("should return undefined when searching for a non-existent animal", () => {
    expect(zoo.getAnimal("Ghost")).toBeUndefined();
  });


});
