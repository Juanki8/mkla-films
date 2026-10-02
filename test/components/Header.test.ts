import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Header from "../../src/components/Header.astro";

describe("Header.astro", () => {
  it("renders the brand, primary navigation, and accessible menu control", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Header);

    expect(html).toContain('aria-label="MKLA Films - Inicio"');
    expect(html).toContain('id="primary-navigation"');
    expect(html).toContain('href="#work"');
    expect(html).toContain('href="#about"');
    expect(html).toContain('href="#contact"');
    expect(html).toContain('aria-controls="primary-navigation"');
    expect(html).toContain('aria-expanded="false"');
  });
});
