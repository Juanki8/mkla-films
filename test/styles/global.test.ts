import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("global.css", () => {
  it("defines the shared theme, accessible focus styles, and responsive layouts", async () => {
    const css = await readFile(resolve(process.cwd(), "src/styles/global.css"), "utf8");

    expect(css).toContain("--color-background:");
    expect(css).toContain("--color-accent:");
    expect(css).toContain("a:focus-visible");
    expect(css).toContain("@media (max-width: 760px)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  });
});
