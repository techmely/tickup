import { describe, expect, it } from "vitest";

import { generatePrefixId } from "server/core/helpers/ids";

describe("Test generate Prefix ID", () => {
  it("Should generate", () => {
    const entityLength = 16 + 3;
    expect(generatePrefixId("entity")).toHaveLength(entityLength);
  });
});
