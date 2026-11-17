import { test } from "node:test";
import assert from "node:assert";
import {
  capitalize,
  truncate,
  reverseText,
  isValidEmail,
  isEmpty,
} from "../src/index.js";

test("capitalize pone la primera letra en mayúscula", () => {
  assert.strictEqual(capitalize("federico"), "Federico");
  assert.strictEqual(capitalize(""), "");
});

test("truncate corta el texto largo", () => {
  assert.strictEqual(truncate("Hola mundo", 4), "Hola...");
  assert.strictEqual(truncate("Hola", 10), "Hola");
});

test("reverseText da vuelta el texto", () => {
  assert.strictEqual(reverseText("hola"), "aloh");
});

test("isValidEmail valida el formato", () => {
  assert.strictEqual(isValidEmail("usuario@email.com"), true);
  assert.strictEqual(isValidEmail("usuarioemail.com"), false);
  assert.strictEqual(isValidEmail(""), false);
});

test("isEmpty detecta valores vacíos", () => {
  assert.strictEqual(isEmpty(""), true);
  assert.strictEqual(isEmpty([]), true);
  assert.strictEqual(isEmpty({}), true);
  assert.strictEqual(isEmpty(null), true);
  assert.strictEqual(isEmpty("hola"), false);
});