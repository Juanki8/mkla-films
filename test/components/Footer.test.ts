import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Footer from "../../src/components/Footer.astro";

describe("Footer.astro", () => {
  it("renders the brand, social and email links, and current year", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);

    expect(html).toContain('aria-label="MKLA Films - Inicio"');
    expect(html).toContain('href="https://www.instagram.com/mklafilms/"');
    expect(html).toContain('href="mailto:hello@mklafilms.com"');
    expect(html).toContain(`© ${new Date().getFullYear()} MKLA FILMS`);
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
