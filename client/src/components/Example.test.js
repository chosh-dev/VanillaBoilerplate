import { jest } from '@jest/globals';
import { $ } from '_utils/dom';
import { COUNT_UP, REQUEST_LOGIN } from '_types';

jest.unstable_mockModule('_store', async () => ({
  getState: jest.fn(),
  dispatch: jest.fn(),
  subscribe: jest.fn(),
  unSubscribe: jest.fn(),
}));

beforeAll(async () => {
  const Example = await import('./Example');
  new Example.default(document.body, {});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Example', () => {
  it('1+2=3', () => {
    expect(1 + 2).toBe(3);
  });

  it('click to dispatch count up to store', async () => {
    const store = await import('_store');
    $('.plusText').click();

    expect(store.dispatch).toBeCalledWith({ payload: undefined, type: COUNT_UP });
  });

  it('click to dispatch login to saga', async () => {
    const store = await import('_store');
    $('.loginText').click();
    expect(store.dispatch).toBeCalledWith({ payload: { id: 'request ID' }, type: REQUEST_LOGIN });
  });
});
