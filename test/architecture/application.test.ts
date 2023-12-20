import { filesOfProject } from "tsarch";
import { describe, expect, it } from "vitest";

describe.concurrent("Application boundaries", () => {
  it("Should allow multiple patterns for dtos", async () => {
    const violations = await filesOfProject()
      .inFolder("*/*/dtos")
      .should()
      .matchPattern(".dto.ts")
      .check();

    expect(violations).toEqual([]);
  });

  it("controllers should not depend on the interactors", async () => {
    const rule = filesOfProject()
      .inFolder("*/*")
      .matchingPattern(".controller.ts")
      .shouldNot()
      .dependOnFiles()
      .matchingPattern(".interactor.ts");

    await expect(rule).toPassAsync();
  });

  it("controllers should not depend on the dtos", async () => {
    const rule = filesOfProject()
      .inFolder("*/*")
      .matchingPattern(".controller.ts")
      .shouldNot()
      .dependOnFiles()
      .inFolder("*/infras/*");

    await expect(rule).toPassAsync();
  });

  it("controllers should not depend on the repository", async () => {
    const rule = filesOfProject()
      .inFolder("*/*")
      .matchingPattern(".controller.ts")
      .shouldNot()
      .dependOnFiles()
      .inFolder("*/infras/*");

    await expect(rule).toPassAsync();
  });
});
