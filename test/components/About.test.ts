import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import About from "../../src/components/About.astro";

describe("About.astro", () => {
  it("renders the about section, biography, image description, and contact link", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);

    expect(html).toContain('id="about"');
    expect(html).toContain("Capturo lo");
    expect(html).toContain('alt="Vide');
    expect(html).toContain('href="#contact"');
    expect(html).toContain("HABLEMOS DE TU PROYECTO");
  });
});
