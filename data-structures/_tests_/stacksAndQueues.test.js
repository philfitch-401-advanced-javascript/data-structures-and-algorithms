const { Stack, Queue } = require('../stacks-and-queues/stacksAndQueues');

describe('Stack', () => {
  it('instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toEqual({ top: null, size: 0 });
  });

  it('push onto a stack', () => {
    let stack = new Stack();
    stack.push('red');
    expect(stack.size).toBe(1);
    expect(stack.top).toEqual({ 'value': 'red', 'next': null });
  });

  it('push multiple values onto a stack', () => {

  });

  it('pop off the stack', () => {

  });

  it('empty a stack after multiple pops', () => {

  });

  it('peek the next item on the stack', () => {

  });
});

describe('Queue', () => {
  it('instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue).toEqual({ front: null, size: 0 });
  });

  it('enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('red');
    expect(queue.size).toBe(1);
    expect(queue.front).toEqual({ 'value': 'red', 'next': null });
  });

  it('enqueue multiple values into a queue', () => {

  });

  it('dequeue out of a queue the expected value', () => {

  });

  it('peek into a queue, seeing the expected value', () => {

  });

  it('empty a queue after multiple dequeues', () => {

  });
});
