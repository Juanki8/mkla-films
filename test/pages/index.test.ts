import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import HomePage from "../../src/pages/index.astro";

describe("index.astro", () => {
  it("composes the home page sections and document metadata", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(HomePage);

    expect(html).toContain("<title>MKLA Films</title>");
    expect(html).toContain('class="site-header"');
    expect(html).toContain('id="home"');
    expect(html).toContain('id="work"');
    expect(html).toContain('id="about"');
    expect(html).toContain('id="contact"');
    expect(html).toContain('class="footer"');
  });
});
