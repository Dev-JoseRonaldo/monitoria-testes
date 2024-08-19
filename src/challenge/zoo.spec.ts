
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

  test('should get animal by name', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    const foundAnimal = zoo.getAnimal('Leo');
    expect(foundAnimal).toEqual(animal);
  });

  test('should return undefined if animal is not found', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    const foundAnimal = zoo.getAnimal('Zebra');
    expect(foundAnimal).toBeUndefined();
  });
});
