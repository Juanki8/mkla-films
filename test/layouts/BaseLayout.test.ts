import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import BaseLayout from "../../src/layouts/BaseLayout.astro";

describe("BaseLayout.astro", () => {
  it("renders the document metadata and main content slot", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BaseLayout, {
      props: { title: "Test title", description: "Test description" },
      slots: { default: '<main id="main-content"><h1>Content</h1></main>' },
    });

    expect(html).toContain('<html lang="es">');
    expect(html).toContain('<meta name="description" content="Test description"');
    expect(html).toContain("<title>Test title</title>");
    expect(html).toContain('href="#main-content"');
    expect(html).toContain("<h1>Content</h1>");
  });

  it("uses its default metadata when props are omitted", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BaseLayout);

    expect(html).toContain("MKLA Films");
    expect(html).toContain('name="description"');
  });
});
