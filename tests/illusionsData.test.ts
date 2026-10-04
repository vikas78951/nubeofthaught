import { describe, it, expect } from "vitest";
import { ILLUSIONS_DATA } from "../lib/illusionsData";

describe("Illusions Data Integrity & Zero Priming Contract", () => {
  it("should contain exactly 19 curated optical illusion stages", () => {
    expect(ILLUSIONS_DATA).toHaveLength(19);
  });

  it("each illusion should have a valid title, imageSrc, and options", () => {
    ILLUSIONS_DATA.forEach((stage, idx) => {
      expect(stage.id).toBe(idx + 1);
      expect(stage.title).toBeTruthy();
      expect(stage.question).toBeTruthy();
      expect(stage.imageSrc).toMatch(/^\/images\/.+/);
      expect(stage.options.length).toBeGreaterThanOrEqual(2);

      stage.options.forEach((opt) => {
        expect(opt.id).toBeTruthy();
        expect(opt.text).toBeTruthy();
        expect(opt.interpretation).toBeTruthy();
      });
    });
  });
});
