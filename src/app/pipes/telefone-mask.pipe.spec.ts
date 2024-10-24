import { TelefoneMaskPipe } from './telefone-mask.pipe';

describe('TelefoneMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new TelefoneMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
