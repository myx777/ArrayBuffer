// test.js
import ArrayBufferConverter from '../app';

test('testing buffer converter with getBuffer()', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  const converter = new ArrayBufferConverter();
  const buffer = converter.getBuffer(data);

  converter.load(buffer);

  // Проверяем, что результат toString соответствует ожидаемым данным
  expect(converter.toString()).toEqual(data);
});
