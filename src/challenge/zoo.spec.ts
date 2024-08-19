
import { Zoo, Animal } from './zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('should add a new animal', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  test('should remove animal by name', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Zebra', 'Zebra', 4);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    zoo.removeAnimal('Leo');
    expect(zoo.getAllAnimals()).not.toContainEqual(animal1);
    expect(zoo.getAllAnimals()).toContainEqual(animal2);
  });
});
