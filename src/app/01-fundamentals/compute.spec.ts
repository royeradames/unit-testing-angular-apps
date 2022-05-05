import { compute } from './compute';

describe('computer', () => {
  it('should return 0 if inport is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
});
