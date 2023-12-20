import { describe, expect, it } from "vitest";

import { DEFAULT_PREFIX_ID_LENGTH, generatePrefixId, generateUserId } from "../../helpers/ids";

describe("Test generate Prefix ID", () => {
  it("Should generate generic entity id", () => {
    const entityLength = DEFAULT_PREFIX_ID_LENGTH + 6;
    expect(generatePrefixId("entity")).toHaveLength(entityLength);
  });
  it("Should generate user entity id", () => {
    const entityLength = DEFAULT_PREFIX_ID_LENGTH + 1;
    expect(generateUserId()).toHaveLength(entityLength);
  });
});
