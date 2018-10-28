// Simple test
import CounterStore from './CountStore';

describe('CounterStore', () => {
  let counter;

  beforeAll(() => {
    console.log('beforeAll');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
    counter = new CounterStore();
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('constructor', () => {
    expect(counter.num).toBe(0);
  });

  test('onIncrement', () => {
    counter.onIncrement();
    expect(counter.num).toBe(1);
  });

  test('onDecrement', () => {
    counter.onDecrement();
    expect(counter.num).toBe(-1);
  });

  test('getDoubleCount1', () => {
    expect(counter.getDoubleCount).toBe(0);
  });

  test('getDoubleCount2', () => {
    counter.onIncrement();
    expect(counter.getDoubleCount).toBe(2);
  });

  test('onAsyncIecrement', async () => {
    await counter.onAsyncIecrement();
    expect(counter.num).toBe(1);
  });
});
