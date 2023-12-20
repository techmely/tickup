import { filesOfProject } from "tsarch";
import { describe, expect, it } from "vitest";

describe.concurrent("domain boundaries", () => {
  it("Business logic should not depend on the application", async () => {
    const rule = filesOfProject()
      .inFolder("*/domain/*")
      .shouldNot()
      .dependOnFiles()
      .inFolder("*/application/*");

    await expect(rule).toPassAsync();
  });

  it("Business logic should not depend on the controller", async () => {
    const rule = filesOfProject()
      .inFolder("*/domain/*")
      .shouldNot()
      .dependOnFiles()
      .matchingPattern("controller.ts");

    await expect(rule).toPassAsync();
  });

  it("Business logic should not depend on the dto", async () => {
    const rule = filesOfProject()
      .inFolder("*/domain/*")
      .shouldNot()
      .dependOnFiles()
      .inFolder("*/dtos/*");

    await expect(rule).toPassAsync();
  });

  it("Business logic should be cycle free", async () => {
    const rule = filesOfProject().inFolder("*/domain/*").should().beFreeOfCycles();

    await expect(rule).toPassAsync();
  });

  it("Should allow multiple patterns for interactors", async () => {
    const violations = await filesOfProject()
      .inFolder("*/*/domain/use-cases/interactors")
      .should()
      .matchPattern("(.interactor.ts|__tests__)")
      .check();

    expect(violations).toEqual([]);
  });

  it("Should allow multiple patterns for entities", async () => {
    const violations = await filesOfProject()
      .inFolder("*/*/domain/entities")
      .should()
      .matchPattern("(.entity.ts|__tests__|.types.ts)")
      .check();

    expect(violations).toEqual([]);
  });

  it("Should allow multiple patterns for events", async () => {
    const violations = await filesOfProject()
      .inFolder("*/*/domain/events/*")
      .should()
      .matchPattern(".event.ts")
      .check();

    expect(violations).toEqual([]);
  });

  it("Should allow multiple patterns for value objects", async () => {
    const violations = await filesOfProject()
      .inFolder("*/domain/value-objects/*")
      .should()
      .matchPattern(".value-object.ts")
      .check();

    expect(violations).toEqual([]);
  });

  it("Should allow multiple patterns for input/output ports", async () => {
    const violations = await filesOfProject()
      .inFolder("*/*/domain/use-cases/ports/*")
      .should()
      .matchPattern("(.in-port.ts|.out-port.ts)")
      .check();

    expect(violations).toEqual([]);
  });

  it("Should allow multiple patterns for repository", async () => {
    const violations = await filesOfProject()
      .inFolder("*/domain/rep/*")
      .should()
      .matchPattern("(.repository.ts|.model.ts)")
      .check();

    expect(violations).toEqual([]);
  });
});
