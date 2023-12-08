// app.js
export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let result = '';
    const buffer16 = new Uint16Array(this.buffer);

    buffer16.forEach((num) => {
      result += String.fromCharCode(num);
    });

    return result;
  }

  // готовая функция из задания, преобразует строку в бинарные дванны и длинной буфера в 16 байт
  static getBuffer(input) {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);

    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }

    return buffer;
  }
}
