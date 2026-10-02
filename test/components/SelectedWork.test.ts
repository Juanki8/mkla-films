import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import SelectedWork from "../../src/components/SelectedWork.astro";

describe("SelectedWork.astro", () => {
  it("renders all three project categories with contact links", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(SelectedWork);

    expect(html.match(/<article class="project">/g)).toHaveLength(3);
    expect(html).toContain("BODAS");
    expect(html).toContain("CONCIERTOS");
    expect(html).toContain("DOCUMENTALES");
    expect(html.match(/href="#contact"/g)).toHaveLength(3);
    expect(html).toContain('loading="lazy"');
  });
});
