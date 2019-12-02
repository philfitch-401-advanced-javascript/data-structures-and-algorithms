const { AnimalShelter } = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('AnimalShelter', () => {
  it('adds a dog or cat to the shelter', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.front.value).toEqual('dog');
  });

  it('returns preferred animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    let dogPref = shelter.dequeue('dog');
    let catPref = shelter.dequeue('cat');
    expect(dogPref).toEqual('dog');
    expect(catPref).toEqual('cat');
  });
});
