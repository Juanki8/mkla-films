import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import FeaturedFilm from "../../src/components/FeaturedFilm.astro";

describe("FeaturedFilm.astro", () => {
  it("renders the featured film details and contact action", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(FeaturedFilm);

    expect(html).toContain("Mar");
    expect(html).toContain("VIDEO DE BODA");
    expect(html).toContain('href="#contact"');
    expect(html).toContain("VER VIDEO COMPLETO");
    expect(html).toContain('alt="');
  });
});
