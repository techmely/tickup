import { JestResultFactory, JestViolationFactory } from "tsarch";
import { expect } from "vitest";

expect.extend({
  async toPassAsync(checkable) {
    if (!checkable) {
      return JestResultFactory.error("expected something checkable as an argument for expect()");
    }
    const violations = await checkable.check();
    const jestViolations = violations.map((v) => JestViolationFactory.from(v));
    return JestResultFactory.result(this.isNot, jestViolations);
  },
});
