import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Hero from "../../src/components/Hero.astro";

describe("Hero.astro", () => {
  it("renders the main heading, descriptive image, and work link", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero);

    expect(html).toContain('id="home"');
    expect(html).toContain("MKLA");
    expect(html).toContain('alt="Pareja celebrando su boda"');
    expect(html).toContain('href="#work"');
  });
});
