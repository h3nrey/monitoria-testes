
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


});
