
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

  test("should return all animals", () => {
    const a1 = new Animal("Leo", "Lion", 6);
    const a2 = new Animal("Tony", "Tiger", 8);
    zoo.addAnimal(a1);
    zoo.addAnimal(a2);
    expect(zoo.getAllAnimals()).toEqual([a1, a2]);
  });
  test("should return animals by species", () => {
    const cat1 = new Animal("Whiskers", "Cat", 2);
    const cat2 = new Animal("Garfield", "Cat", 7);
    const dog = new Animal("Snoopy", "Dog", 4);
    zoo.addAnimal(cat1);
    zoo.addAnimal(cat2);
    zoo.addAnimal(dog);
    expect(zoo.getAnimalsBySpecies("Cat")).toEqual([cat1, cat2]);
  });

  test("should return an empty array when no animals match the species", () => {
    const rabbit = new Animal("Bugs", "Rabbit", 3);
    zoo.addAnimal(rabbit);
    expect(zoo.getAnimalsBySpecies("Wolf")).toEqual([]);
  });
});
