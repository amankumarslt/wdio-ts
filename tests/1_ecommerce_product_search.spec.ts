describe('LambdaTest ECommerce Search', () => {
  it('Search product and validate results', async () => {
    await browser.url('https://ecommerce-playground.lambdatest.io/');

    const searchTerm = 'iPhone';

    const searchBox = $('[data-autocomplete="5"]');
    await searchBox.click();
    await searchBox.setValue(searchTerm);

    const searchButton = $('.type-text');
    await searchButton.click();

    const heading = $('h1.h4');
    await expect(heading).toHaveText(expect.stringContaining(searchTerm));

    await expect(browser).toHaveTitle(expect.stringMatching(new RegExp(searchTerm, 'i')));
  });
});
