const { PseudoQueue } = require('../queueWithStacks/queue-with-stacks');

describe('PseudoQueue', () => {
  it('enqueue a value the end of the queue', () => {
    const pseudoQue = new PseudoQueue();
    pseudoQue.enqueue('red');
    pseudoQue.enqueue('orange');
    expect(pseudoQue.front.value).toEqual('red');
  });

  it('dequeue a node from the front of the queue and returns its value', () => {
    const pseudoQue = new PseudoQueue();
    pseudoQue.enqueue('red');
    pseudoQue.enqueue('orange');
    let result = pseudoQue.dequeue();
    expect(pseudoQue.front.value).toEqual('orange');
    expect(result).toBe('red');
  });
});
