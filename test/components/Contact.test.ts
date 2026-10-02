import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Contact from "../../src/components/Contact.astro";

describe("Contact.astro", () => {
  it("renders the contact section and email action", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Contact);

    expect(html).toContain('id="contact"');
    expect(html).toContain("CONTACTO");
    expect(html).toContain('href="mailto:hello@mklafilms.com"');
    expect(html).toContain("HELLO@MKLAFILMS.COM");
  });
});
