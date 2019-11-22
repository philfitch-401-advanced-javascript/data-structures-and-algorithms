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
    let stack = new Stack();
    stack.push('red');
    stack.push('orange');
    expect(stack.size).toBe(2);
    expect(stack.top).toEqual({ 'value': 'orange', 'next': { value: 'red', 'next': null } });
  });

  it('pop off the stack', () => {
    let stack = new Stack();
    stack.push('red');
    stack.push('orange');
    let result = stack.pop();
    expect(stack.size).toBe(1);
    expect(stack.top).toEqual({ 'value': 'red', 'next': null });
    expect(result).toBe('orange');
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
    let queue = new Queue();
    queue.enqueue('red');
    queue.enqueue('orange');
    expect(queue.size).toBe(2);
    expect(queue.front).toEqual({ 'value': 'red', 'next': { 'value': 'orange', 'next': null } });
  });

  it('dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('red');
    queue.enqueue('orange');
    let result = queue.dequeue();
    expect(queue.size).toBe(1);
    expect(queue.front).toEqual({ 'value': 'orange', 'next': null });
    expect(result).toBe('red');
  });

  it('peek into a queue, seeing the expected value', () => {

  });

  it('empty a queue after multiple dequeues', () => {

  });
});
