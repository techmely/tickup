import { customAlphabet } from "nanoid";

export const generateId = customAlphabet(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const prefixes = Object.freeze({
  api: "api",
  entity: "ett",
  request: "req",
  workspace: "ws",
  keyAuth: "key_auth", // <-- this is internal and does not need to be short or pretty
  vercelBinding: "vb",
  test: "test", // <-- for tests only
});

export function generatePrefixId(prefix: keyof typeof prefixes, length = 16): string {
  return [prefixes[prefix], generateId(length)].join("_");
}
