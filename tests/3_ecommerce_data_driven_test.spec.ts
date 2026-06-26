describe('LambdaTest ECommerce Search Validation', () => {
  it('Search and validate product results', async () => {
    const product = 'MacBook';

    await browser.url('https://ecommerce-playground.lambdatest.io/');

    const searchInput = $('[data-autocomplete="5"]');
    await searchInput.setValue(product);

    const searchButton = $('.type-text');
    await searchButton.click();

    const heading = $('h1.h4');
    await expect(heading).toHaveText(expect.stringContaining(product));

    const actualUrl = await browser.getUrl();
    const normalizedUrl = actualUrl.replace(/\+/g, ' ').toLowerCase();

    expect(normalizedUrl).toContain(product.toLowerCase());
  });
});
