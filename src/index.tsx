const MyRustLib = require('./NativeMyRustLib').default;

export function multiply(a: number, b: number): number {
  return MyRustLib.multiply(a, b);
}
