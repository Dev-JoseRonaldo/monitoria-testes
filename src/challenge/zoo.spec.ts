
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

  test('should get all animals', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Peçanha', 'Snake', 1);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    const allAnimals = zoo.getAllAnimals();
    expect(allAnimals).toEqual([animal1, animal2]);
  });

  test('should get animals by species', () => {
    const animal1 = new Animal('Leo', 'Lion', 5);
    const animal2 = new Animal('Peçanha', 'Snake', 1);
    const animal3 = new Animal('Lince', 'Lion', 3);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    zoo.addAnimal(animal3);
    const lions = zoo.getAnimalsBySpecies('Lion');
    expect(lions).toEqual([animal1, animal3]);
  });
});
